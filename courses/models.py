from django.db import models

class Category(models.Model):
	title=models.CharField(max_length=255,unique=True)
	created_date=models.DateTimeField(auto_now_add=True)
	created_by=models.CharField(max_length=255,null=True,blank=True)

	class Meta:
		verbose_name_plural = 'categories'

	def __str__(self):
		return self.title


class Lesson(models.Model):
	category=models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
	title=models.CharField(max_length=255)
	description=models.CharField(max_length=1000)
	thumbnail=models.ImageField(upload_to='lesson',blank=True,null=True)
	video=models.FileField(upload_to='lesson_video',blank=True,null=True)
	pdf=models.FileField(upload_to='lesson_pdf',blank=True,null=True)
	created_date=models.DateTimeField(auto_now_add=True)
	created_by=models.CharField(max_length=255,null=True,blank=True)

	class Meta:
		verbose_name_plural = 'lessons'

	def __str__(self):
		return self.title


class Enroll(models.Model):
	lesson=models.ForeignKey(Lesson,on_delete=models.SET_NULL,null=True)
	user=models.CharField(max_length=255,null=True,blank=True)

	class Meta:
		verbose_name_plural = 'enrolls'

	def __str__(self):
		return self.lesson


class Question(models.Model):
	lesson = models.ForeignKey(Lesson, on_delete=models.CASCADE)
	question = models.CharField(max_length=255)
	answer = models.CharField(max_length=255)
	option_one = models.CharField(max_length=255)
	option_two = models.CharField(max_length=255)
	option_three = models.CharField(max_length=255)
	option_four = models.CharField(max_length=255)

	class Meta:
		verbose_name_plural = 'questions'

	def __str__(self):
		return self.question