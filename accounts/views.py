from django.shortcuts import render
from .models import Accounts
from .serializers import UserRegisterSerializer, UserLoginSerializer
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import login

class UserRegisterView(APIView):

    def post(self, request):
        import pdb; pdb.set_trace();
        serializer=UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'You have been successfully registered'},status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):

    def post(self, request):
        serializer=UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user=serializer.validated_data['user']
        login(request, user)
        return Response(serializer.data)
