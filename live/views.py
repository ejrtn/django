from django.shortcuts import redirect, render
from video.models import VideoCategory
from django.http import JsonResponse
from user.models import User
from live.models import Live
from django.db.models import Count

# Create your views here.

# http://127.0.0.1:8000/{user_id}값/live
def live(request,user_id):
    if request.session.get('id',False)==False:
        return redirect('/user/login')      
    else:
        if Live.objects.values().filter(user_id=user_id).aggregate(count=Count('*'))['count'] == 0:
            return render(request,'live/noLive.html',{})
        sub_name = User.objects.values('sub_name').get(user_id=request.session['id'])['sub_name']
        return render(request,'live/live.html',{'videoCategory':VideoCategory.objects.all(),'sub_name':sub_name,'live_user':Live.objects.values().get(user_id=user_id)})

def liveFull(request,user_id):
    if request.session.get('id',False)==False:
        return redirect('/user/login')      
    else:
        if Live.objects.values().filter(user_id=user_id).aggregate(count=Count('*'))['count'] == 0:
            return render(request,'live/noLive.html',{})
        return render(request,'live/liveFull.html',{'live_user':user_id})



def liveList(request):
    if request.method=='POST':
        livelist = []
        if int(request.POST.get('videoCategory')) == 0:
            livelist = Live.objects.values('user_id','title','src')[int(request.POST.get('start')):int(request.POST.get('start'))+5]
        else:
            livelist = Live.objects.values().filter(videoCategory = request.POST.get('videoCategory'))
        return JsonResponse({'result':list(livelist)})
    else:
        return JsonResponse({'result':'error'})

def liveUserSrc(request):
    if request.method=='POST':
        return JsonResponse({'result':Live.objects.values('src').get(user_id=request.POST.get('user_id'))['src']})
    else:
        return JsonResponse({'result':'error'})