from rest_framework import serializers, exceptions
from django.contrib.auth import authenticate
from .models import *

from django.contrib.auth import get_user_model
User = get_user_model()


class UserSerializer(serializers.ModelSerializer):

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        if 'view' in self.context and self.context['view'].action in ['update', 'partial_update']:
            self.fields.pop('email', None)
            self.fields.pop('password', None)

    class Meta:
        model = User
        fields = ['id','email','name','phone','password','image','dob','gender','address','created_date','is_staff']
        extra_kwargs = {
            'password': {'write_only': True},
            'created_date':{'read_only':True},

        }


    def validate_image(self, image):
        try:
            if not image.name.endswith(('.jpg','.jpeg','.png')):
                raise exceptions.ValidationError("Only png,jpg and jpeg images are accepted")

            return image
        except:
            pass

class UserAdminSerializer(UserSerializer):
    class Meta(UserSerializer.Meta):
        fields=UserSerializer.Meta.fields+['is_active','is_admin','is_verified']


class EmailVerificationSerializer(serializers.Serializer):
	token = serializers.CharField(max_length=255)

	class Meta:
		model = User
		fields = ['token']


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    password = serializers.CharField(max_length=255)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            user = authenticate(email=email, password=password)

            if user:
                if user.is_active and user.is_verified:
                    data["user"] = user
                else:
                    msg="Please verify your email"
                    raise serializers.ValidationError(msg)

            else:
                msg="The email and password is not registered"
                raise serializers.ValidationError(msg)
        else:
            msg = "Please provide email and password"
            raise serializers.ValidationError(msg)

        return data
