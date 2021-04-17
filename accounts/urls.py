from django.urls import path, include
from rest_framework import routers
from rest_framework_simplejwt import views as jwt_views
from .views import UserView, VerifyEmail, UserLoginView, UserLogoutView, ResendEmailVerification
from .password import ChangePasswordView

router=routers.DefaultRouter()
router.register('users', UserView, basename='users')


urlpatterns = [
	path('token/create/', jwt_views.TokenObtainPairView.as_view(), name='token_create'),
	path('token/refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
	path('', include(router.urls)),
	path('verify-email/', VerifyEmail.as_view(), name='verify-email'),
	path('re-verifyemail/', ResendEmailVerification.as_view(), name='re-verifyemail'),
	path('login/', UserLoginView.as_view(), name='login'),
	path('logout/', UserLogoutView.as_view(), name='logout'),
	path('change-password/<int:pk>/', ChangePasswordView.as_view(), name='change-password-view'),
	path('api-auth/', include('rest_framework.urls',namespace='rest_framework)')),

]