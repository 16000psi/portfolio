from django.contrib import admin
from django.urls import path, include
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('common.urls')),
    path('', index, name='index'),
]
