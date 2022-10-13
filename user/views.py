from multiprocessing.dummy import JoinableQueue
from django.shortcuts import render, get_object_or_404
from .models import User
from django.http import JsonResponse
from django.core import serializers
import json

# Create your views here.

def login(requset):
    return render(requset,'user/login.html')

def join(request):
    return render(request,'user/join.html')

def info(request):
    return render(request,'user/info.html',{'result':User.objects.all()})

def loginCheck(request):
    if request.method=='POST':
        data = json.loads(request.body)
        try:
            result = User.objects.values().get(user_id=data.get('user_id'),pw=data.get('pw'))
            request.session['id']=data.get('user_id')
            return JsonResponse({'result':list(result)})
        except User.DoesNotExist as e:
            return JsonResponse({'result':[]})
        
    else:
        return JsonResponse({'result':['error']})

def logout(requset):
    del requset.session['id']
    return render(requset,'user/login.html')