from django.shortcuts import render
from .models import Accounts
from .serializers import UserRegisterSerializer
from rest_framework import APIView, status

class UserRegisterView(APIView):

    def post(self, request):
        serializer=UserRegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response({'message': 'You have been successfully registered'},status=status.HTTP_201_CREATED)
