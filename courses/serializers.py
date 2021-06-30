from rest_framework import serializers
from .models import Category, Lesson, Enroll, Question, Notifications
from django.core.exceptions import ValidationError
from django.contrib.auth import get_user_model
User = get_user_model()

class CategorySerializer(serializers.ModelSerializer):
	class Meta:
		model = Category
		fields = ['id','title','created_date','created_by']
		extra_kwargs = {
            'created_date': {'read_only': True},
            'created_by':{'read_only':True}
        }


class LessonSerializer(serializers.ModelSerializer):
	class Meta:
		model = Lesson
		fields = ['id','category','title','description','thumbnail','video','pdf','created_date','created_by']
		extra_kwargs = {
            'created_date': {'read_only': True},
            'created_by':{'read_only':True}
        }


class LessonReadSerializer(serializers.ModelSerializer):
	category_value = serializers.IntegerField(source='category.id', read_only=True)
	class Meta:
		model = Lesson
		fields = ['id','category','category_value','title','description','thumbnail','video','pdf','created_date','created_by']
		extra_kwargs = {
            'created_date': {'read_only': True},
            'created_by':{'read_only':True}
        }
		depth=1

class NotificationsSerializer(serializers.ModelSerializer):
    class Meta:
        model=Notifications
        fields=['id','title','description','course','created_date']
        extra_kwargs = {
            'created_date': {'read_only': True}
        }

class EnrollSerializer(serializers.ModelSerializer):
	class Meta:
		model = Enroll
		fields = ['id','lesson','user']
		extra_kwargs = {
            'user': {'read_only': True}
        }


class QuestionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Question
		fields = ['id','lesson','question','answer','option_one','option_two','option_three','option_four','created_date','created_by']
		extra_kwargs = {
            'created_date': {'read_only': True},
            'created_by':{'read_only':True}
        }

class QuestionReadOnlySerializer(serializers.ModelSerializer):
	class Meta:
		model = Question
		fields = ['id','lesson','question','answer','option_one','option_two','option_three','option_four','created_date','created_by']
		extra_kwargs = {
            'created_date': {'read_only': True},
            'created_by':{'read_only':True}
        }
		depth = 1