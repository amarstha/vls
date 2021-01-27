from rest_framework import serializers
from .models import Accounts

class UserRegisterSerializer(serializers.ModelSerializer):
    model=Accounts
    fields=['first_name', 'last_name', 'email', 'username', 'password']

    extra_kwargs={
        'password': {'write_only': True}
    }