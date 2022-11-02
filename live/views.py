from django.shortcuts import redirect, render
from video.models import VideoCategory
from django.http import JsonResponse

# Create your views here.


def live(request):
    if request.session.get('id',False)==False:
        return redirect('/user/login')      
    else:
        return render(request,'live/live.html',{'videoCategory':VideoCategory.objects.all(),'id':request.session['id']})
