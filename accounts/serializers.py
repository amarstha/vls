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
    username=serializers.CharField(max_length=255)
    password=serializers.CharField(max_length=255)

    def validate(self, data):
        import pdb; pdb.set_trace()
        username=data.get('username')
        password=data.get('password')

        if username and password:
            user=authenticate(username=username, password=password)

            if user:
                if user.is_verified:
                    data["user"]=user
                else:
                    msg="Please verify your account"
                    raise serializers.ValidationError(msg)
            else:
                msg="Username and Password is not registered"
                raise serializers.ValidationError(msg)
        return data