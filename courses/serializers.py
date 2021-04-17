from rest_framework import serializers
from .models import Category, Lesson, Enroll, Question

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
	class Meta:
		model = Lesson
		fields = ['id','category','title','description','thumbnail','video','pdf','created_date','created_by']
		extra_kwargs = {
            'created_date': {'read_only': True},
            'created_by':{'read_only':True}
        }
		depth=1


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
		fields = '__all__'
		depth = 1