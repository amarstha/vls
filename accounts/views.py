from django.contrib.auth import get_user_model,logout,login,authenticate
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, status, mixins
from rest_framework.decorators import action
from rest_framework.exceptions import APIException
from rest_framework.response import Response

from rest_framework.permissions import AllowAny, IsAuthenticated
from django.urls import reverse
import jwt

from django.conf import settings
from django.contrib.sites.shortcuts import get_current_site
from django.contrib.auth.hashers import make_password
from rest_framework.views import APIView

from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.authtoken.models import Token
from rest_framework.authentication import TokenAuthentication
from django.core.exceptions import ObjectDoesNotExist
from django_filters.rest_framework import DjangoFilterBackend

from .override import IsAdmin, CanView
from .serializers import UserSerializer, EmailVerificationSerializer, UserLoginSerializer, UserAdminSerializer

from rest_framework.filters import SearchFilter, OrderingFilter
from rest_framework.throttling import AnonRateThrottle

from django.core.mail import send_mail, EmailMultiAlternatives

User = get_user_model()

class UserView(viewsets.ModelViewSet):
    """
    user view for CRUD operation
    """

    queryset = User.objects.all()
    serializer_class = UserSerializer
    filter_backends = [DjangoFilterBackend, SearchFilter, OrderingFilter]
    filterset_fields = ['email','is_staff','is_admin']
    search_fields = ['email','is_staff','is_admin']
    ordering_fields = ['email','is_staff','is_admin']
    lookup_field = 'id'

    def get_serializer_class(self):
        """
        METHOD TO PROVIDE DATA ACCORIDING TO USER TYPE
        """
        user = self.request.user

        try:
            if user.is_admin:
                return UserAdminSerializer

            else:
                return UserSerializer
        except:
            return UserSerializer


    def get_permissions(self):

        """
        Providing Permissions According To UserType
        """

        if self.action in ['create']:
            permissions_classes = [AllowAny]

        elif self.action in ['destroy']:
            permissions_classes = [IsAdmin]

        elif self.action in ['list']:
            permissions_classes = [IsAuthenticated]

        elif self.action == 'retrieve':
            permissions_classes = [CanView]

        elif self.action in ['update', 'partial_update']:
            permissions_classes = [CanView]

        else:
            return super().get_permissions()

        return [permissions() for permissions in permissions_classes]

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', True)
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data, partial=partial)

        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)

        response_data = {
            "detail": "Successfully Updated!! ",
            "user": serializer.data
        }
        return Response(response_data, status=status.HTTP_200_OK)

    def perform_create(self, serializer):

        serializer.validated_data['password'] = make_password((serializer.validated_data['password']))
        user = serializer.save()
        user_data = serializer.data
        headers = self.get_success_headers(serializer.data)
        user = User.objects.get(email=user_data['email'])
        token = RefreshToken.for_user(user).access_token


        subject, from_email, to = 'Verify your email', 'no-reply@vls.com', user.email
        email_body = 'Please verify your email - ' + user.email
        current_site = get_current_site(self.request).domain
        absurl = 'http://' + current_site + '/verify-email/' + "?token=" + str(token)
        html_content = f'<p>{email_body}</p>\n<a href="{absurl}">Click here</a>'
        msg = EmailMultiAlternatives(subject, email_body, from_email, [to])
        msg.attach_alternative(html_content, "text/html")
        msg.send()

        response_data = {
            "detail": "Successfully Registered!! Please check your email for verification.",
            "user": user_data
        }
        return Response(response_data, status=status.HTTP_201_CREATED, headers=headers)



    def perform_destroy(self, instance):

        """
        USERS ARE NOT ALLOWED TO DELETE THEMSELVES
        ADMIN ARE NOT ALLOWED TO DELETE OTHER ADMIN
        HOD ARE NOT ALLOWED TO DELETE OTHER HOD
        """

        user = self.request.user
        if user == instance:
            return Response({'message': 'You are not allowed to deleted yourself'})
        elif user.is_staff and not user.is_admin and instance.is_staff:
            return Response({'message': 'You are not allowed to deleted users'})
        elif user.is_staff and user.is_admin and instance.is_admin and not user.is_superuser:
            return Response({'message': 'Admin is not allowed to deleted Admin'})
        else:
            instance.delete()

    def retrieve(self, request, *args, **kwargs):

        """
        TO GET DATA OF SPECIFIC USER
        """

        try:
            user = self.get_object()
            serializer = self.get_serializer(user)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except:
            return Response(
                {'status': status.HTTP_401_UNAUTHORIZED, 'detail': 'You donot have permission to perform this action'})

    
    @action(methods=['get'], detail=False)
    def profile(self, request, *args, **kwargs):

        """
        METHOD TO GET PROFILE OF USER
        """

        try:
            user = request.user
            if user.is_admin:
                serializer = UserAdminSerializer(user)

            else:
                serializer = UserSerializer(user)

            return Response(serializer.data, status=status.HTTP_200_OK)

        except:
            return Response({'detail': 'No detail found for the request user'})


    @action(methods=['get'], detail=False, permission_classes=[IsAdmin])
    def active(self, request):
        """
        LIST OF USERS WHICH ARE ACTIVE
        """
        users = User.objects.all()
        data = users.filter(is_active=True)
        page = self.paginate_queryset(data)
        serializer = UserSerializer(page, many=True)
        return Response(serializer.data, status=200)


class VerifyEmail(APIView):
	"""
	View For EmailVerification for user
	"""
	serializer_class = EmailVerificationSerializer

	def get(self, request):
		token = request.GET.get('token')
		try:

			payload = jwt.decode(token, settings.SECRET_KEY)
			user = User.objects.get(id=payload['user_id'])
			if not user.is_verified:
				user.is_verified = True
				user.save()
				email=user.email

				email_superuser=list(User.objects.filter(is_superuser=True).values_list('email', flat=True))

				send_mail(
					'New user Registration',
					'user '+email+' has registered on '+get_current_site(self.request).domain,
					'no-reply@vls.com',
					email_superuser,
					fail_silently=False,
				)
			return Response(
				{'detail': 'Email Successfully activated', 'status': status.HTTP_200_OK},
				status=status.HTTP_200_OK)

		except jwt.ExpiredSignatureError as identifier:
			return Response(
				{'detail': 'Activation Expired', 'status': status.HTTP_400_BAD_REQUEST},
				status=status.HTTP_400_BAD_REQUEST)

		except jwt.exceptions.DecodeError as identifier:
			return Response(
				{'detail': 'Invalid token', 'status': status.HTTP_400_BAD_REQUEST},
				status=status.HTTP_400_BAD_REQUEST)



class UserLoginView(APIView):
	"""
	View for Login sytem without implemeting OTP System
	"""
	throttle_classes = [AnonRateThrottle]

	def post(self, request, *args, **kwargs):
		serializer = UserLoginSerializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user=serializer.validated_data['user']
		login(request, user)
		token,created=Token.objects.get_or_create(user=user)

		return Response({
			'token': token.key,
			'email': user.email,
			'is_active':user.is_active,
			'is_staff':user.is_staff,
			'is_admin':user.is_active,

		}, status=status.HTTP_200_OK)


class UserLogoutView(APIView):
	"""
	View for Logout System for user
	"""
	authentication_classes = (TokenAuthentication,)

	def post(self, request):
	    logout(request)
	    return Response({'detail': "Successfully logout"}, status=204)



class ResendEmailVerification(APIView):
	"""
	View for Resending Email Verification for user
	"""
	permission_classes = [AllowAny]

	def post(self, request):
		user = get_object_or_404(User, email=request.data['email']);

		if user.is_verified == True:
			return Response({'detail': 'This email is already verified'}, status=status.HTTP_400_BAD_REQUEST)
		else:
			try:
				token = RefreshToken.for_user(user).access_token
				subject, from_email, to = 'Verify your email', 'no-reply@vls.com', user.email
				email_body='Please verify your email - ' + user.email
				current_site = get_current_site(self.request).domain
				relativelink = reverse('verify-email')
				absurl = 'http://' + current_site + '/verify-email/' + "?token=" + str(token)
				html_content=f'<p>{email_body}</p>\n<a href="{absurl}">Click here</a>'
				msg=EmailMultiAlternatives(subject, email_body, from_email, [to])
				msg.attach_alternative(html_content, "text/html")
				msg.send()
				return Response({'message': 'Email confirmation sent'}, status=status.HTTP_201_CREATED)
			except APIException:
				return Response({'detail': 'This email does not exist, please create a new account'}, status=status.HTTP_403_FORBIDDEN)
