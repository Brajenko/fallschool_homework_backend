from typing import Any
from django.db import models

# Create your models here.
class User(models.Model):
    fullname = models.CharField(max_length=50)
    gender = models.CharField(max_length=7, choices=(('m', 'Парень'),
                                                     ('w', 'Девушка')))
    birthday = models.DateField('birthday date')
    tg = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=18)
    about = models.CharField(max_length=400, blank=True)
    course = models.IntegerField()
    level = models.CharField(max_length=30)
    faculty = models.CharField(max_length=100)
    work = models.CharField(max_length=45, default='', blank=True)