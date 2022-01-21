from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from django.conf.urls import url
from django.shortcuts import render

from django.urls import reverse
from django.views.generic import RedirectView

def get_redirect_url(request, *args, **kwargs):
    return render(request, 'index.html')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls')),
    path('api/', include('accounts.urls')),
    path('api/', include('courses.urls')),
    path('forgot-password/', include('django_rest_passwordreset.urls', namespace='password_reset')),
    # path('', TemplateView.as_view(template_name='index.html')),
]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
urlpatterns.append(url(r'^.*$', get_redirect_url))