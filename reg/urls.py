from django.urls import path

from . import views

urlpatterns = [
    path("", views.first_page, name="page 1"),
    path("1", views.first_page, name="page 1"),
    path("2", views.second_page, name="page 2"),
]