from rest_framework import serializers
from .models import Accounts
from django.contrib.auth import authenticate
from django.contrib.auth.models import User

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields=['first_name', 'last_name', 'email', 'username', 'password']

        extra_kwargs={
            'password': {'write_only': True}
        }


class UserLoginSerializer(serializers.Serializer):
    email=serializers.EmailField(max_length=255)
    password=serializers.CharField(max_length=255)

    def validate(self, data):
        email=data.get('email')
        password=data.get('password')

        if email and password:
            user=authenticate(email=email, password=password)

            if user:
                if user.is_verified:
                    data["user"]=user
                else:
                    msg="Please verify your account"
                    raise serializers.ValidationError(msg)
            else:
                msg="Email and Password is not registered"
                raise serializers.ValidationError(msg)
        return data