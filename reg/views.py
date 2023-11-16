from django.http import HttpResponse
from django.shortcuts import render, redirect
from .forms import UserInfo
from . import models, serializers
from django.views.decorators.csrf import csrf_exempt
from rest_framework.viewsets import ModelViewSet



YEARS = range(1900, 2015+1)

@csrf_exempt
def first_page(request):
    return render(request, 'base.html', {'years':YEARS, 'form': UserInfo})

class UserViewSet(ModelViewSet):
    serializer_class = serializers.UserSerializer
    queryset = models.User.objects.all()