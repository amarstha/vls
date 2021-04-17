from django.urls import path, include
from rest_framework import routers
from .views import CategoryView, LessonView, EnrollView, QuestionView

router=routers.DefaultRouter()
router.register('category', CategoryView, basename='category')
router.register('lesson', LessonView, basename='lesson')
router.register('enroll', EnrollView, basename='enroll')
router.register('question', QuestionView, basename='question')


urlpatterns = [
	path('', include(router.urls)),
]