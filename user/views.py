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

def userSave(request):
    if request.method=='POST':
        if User.objects.filter(user_id=request.POST.get('id')).count() > 0 :
            return JsonResponse({'result':['id 존재']})
        elif User.objects.filter(sub_name=request.POST.get('sub_name')).count() > 0 :
            return JsonResponse({'result':['sub_name 존재']})
        else:
            User(
                name = request.POST.get('name'),
                sub_name = request.POST.get('sub_name'),
                user_id = request.POST.get('id'),
                pw = request.POST.get('pw'),
                phon = request.POST.get('phon'),
                email = request.POST.get('email')
            ).save()
            result = User.objects.values().get(user_id=request.POST.get('id'))
            return JsonResponse({'result':result.values()})
    else:
        return JsonResponse({'result':['error']}) 

def loginCheck(request):
    if request.method=='POST':
        data = json.loads(request.body)
        try:
            result = User.objects.values().get(user_id=data.get('user_id'),pw=data.get('pw'))
            request.session['id']=data.get('user_id')
            print(result)
            return JsonResponse({'result':list(result.values())})
        except User.DoesNotExist as e:
            return JsonResponse({'result':[]})
        
    else:
        return JsonResponse({'result':['error']})

def logout(requset):
    del requset.session['id']
    return render(requset,'user/login.html')


def subNameUpdate(request):
    if request.method=='POST':
        user = User.objects.get(sub_name=request.POST.get('sub_name_ing'))
        user.sub_name = request.POST.get('sub_name_new')
        user.save()
        result = User.objects.values('sub_name').get(sub_name=request.POST.get('sub_name_new'))
        return JsonResponse({'result':result['sub_name']})
    else:
        return JsonResponse({'result':['error']})

