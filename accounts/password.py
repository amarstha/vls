from django.core.exceptions import ValidationError
from rest_framework import serializers, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from django.dispatch import receiver
from django.urls import reverse
from django.contrib.auth import password_validation
from django_rest_passwordreset.signals import reset_password_token_created
from django.core.mail import send_mail
from rest_framework.generics import UpdateAPIView
from rest_framework.authtoken.models import Token
from django.utils.translation import gettext_lazy as _
from django.contrib.auth import get_user_model

User = get_user_model()

class ChangePasswordSerializer(serializers.Serializer):
	old_password = serializers.CharField(max_length=128, write_only=True, required=True)
	new_password = serializers.CharField(max_length=128, write_only=True, required=True)
	confirm_password = serializers.CharField(max_length=128, write_only=True, required=True)

	def validate_old_password(self, value):
		"""
		Method to validate Old Password
		"""
		user = self.context['request'].user
		if not user.check_password(value):
			raise serializers.ValidationError( _('Your old password was entered incorrectly. Please enter it again.'))
			return value

	def validate(self, data):
		"""
		Method to validate data provided by user.
		Validation for Old Password and New Password
		Validation for New Password and Confirm Password
		"""
		if data['new_password'] != data['confirm_password']:
			raise serializers.ValidationError({'confirm_password': _("The two password fields didn't match.")})
		if data['old_password'] == data['new_password']:
			raise ValidationError({'old_password': 'New Password cannot be same as old password'})
		password_validation.validate_password(data['new_password'], self.context['request'].user)
		return data

	def save(self, **kwargs):
		password = self.validated_data['new_password']
		user = self.context['request'].user
		user.set_password(password)
		user.save()
		return user



class ChangePasswordView(UpdateAPIView):

	"""
	View to Update New Password given by user
	"""
	serializer_class = ChangePasswordSerializer

	def update(self, request, *args, **kwargs):
		serializer = self.get_serializer(data=request.data)
		serializer.is_valid(raise_exception=True)
		user = serializer.save()
		# if using drf authtoken, create a new token
		if hasattr(user, 'auth_token'):
			user.auth_token.delete()
		token, created = Token.objects.get_or_create(user=user)
		# return new token
		response = {
			'success': 'Password updated successfully'
		}
		return Response(response, status=status.HTTP_200_OK)


@receiver(reset_password_token_created)
def password_reset_token_created(sender, instance, reset_password_token, *args, **kwargs):

    email_plaintext_message = "Please confirm your reset password " + reset_password_token.user.email + '\n' + "http://127.0.0.1:8000/forgot-password/" + "confirm/?token=" + reset_password_token.key
    # current_site = get_current_site(self.request).domain

    send_mail(
        # title:
        "Confirm Your Reset Password",
        # message:
        email_plaintext_message,
        # from:
        "no-reply@prabhubank.com",
        # to:
        [reset_password_token.user.email]
    )

    # current_site = get_current_site(self.request).domain

    send_mail(
        # title:
        "Confirm Your Reset Password",
        # message:
        email_plaintext_message,
        # from:
        "no-reply@vls.com",
        # to:
        [reset_password_token.user.email]
    )