from django.shortcuts import redirect, render
from video.models import VideoCategory
from django.http import JsonResponse
from user.models import User

# Create your views here.


def live(request):
    if request.session.get('id',False)==False:
        return redirect('/user/login')      
    else:
        sub_name = User.objects.values('sub_name').get(user_id=request.session['id'])['sub_name']
        return render(request,'live/live.html',{'videoCategory':VideoCategory.objects.all(),'sub_name':sub_name})
