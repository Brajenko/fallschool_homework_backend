from django.http import HttpResponse
from django.shortcuts import render, redirect
from .forms import UserInfo
from .models import User
from django.views.decorators.csrf import csrf_exempt


YEARS = range(1900, 2015+1)

@csrf_exempt
def first_page(request):
    if request.method == 'POST':
        form = UserInfo(request.POST)
        data = form.data
        new_user = User()
        new_user.fullname = data['fullname']
        new_user.gender = data['gender']
        new_user.birthday = data['birthday']
        new_user.tg = data['tg']
        new_user.phone_number = data['phone_number']
        new_user.about = data['about']
        new_user.save()
        return redirect('page 2')
    return render(request, 'base.html', {'years':YEARS, 'form': UserInfo})