from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register('users', views.UserViewSet, basename="user-viewset")

urlpatterns = [
    path('', views.first_page, name="page 1"),
    path('api/', include(router.urls))
]