from unittest import result
from django.shortcuts import redirect, render
from .models import VideoCategory,Video
from django.http import JsonResponse


# Create your views here.


def main(request):
    if request.session.get('id',False)==False:
        return redirect('/user/login')      
    else:
        return render(request,'video/main.html',{'videoCategory':VideoCategory.objects.all(),'id':request.session['id']})

def edit(request):
    if request.session.get('id',False)==False:
        return redirect('/user/login')
    else:
        return render(request,'video/edit.html',{'videoCategory':VideoCategory.objects.all()})

def videoSave(request):
    if request.method=='POST':
        q = VideoCategory.objects.get(id=request.POST.get('category'))
        q.video_set.create(
            title=request.POST.get('title'),
            user_id=request.session['id'],
            url=request.FILES.get('video'),
            url_small=request.FILES.get('video'),
            content=request.POST.get('title'),
            thumbnail=request.FILES.get('thumbnail'),
            thumbnail_small=request.FILES.get('thumbnail'))
        return JsonResponse({'result':['success']})
    else:
        return JsonResponse({'result':['error']})

# 동영상 목록
# get('type') : 조회 조건
#  type으로 넘어오는 값
#  category : 카테고리 id 값    - videoCategoery_id 값(int)
#  title : 제목 - like 검색(string)
#  url : 경로   - like 검색(string)
#  all : 나머지 - 조건 없이 모든 데이터(임의 data가 넘어와도 무시)

# get('data') : 데이터

# getlist('numStart[]') : 모든 데이터가 아닌 일부만 가져오기 위한 값을 담아서 옴(길이 2인 배열)
#  ['시작번호', '갯수'] ex) [0,20]
def videoList(request):
    if request.method=='POST':
        if request.POST.get('type') == 'category':
            q = Video.objects.values('title','url_small','thumbnail_small','videoCategory_id','id').filter(videoCategory_id=request.POST.get('data'))
            
        elif request.POST.get('type') == 'title':
            q = Video.objects.values('title','url_small','thumbnail_small','videoCategory_id','id').filter(title__icontains=request.POST.get('data'))
        
        elif request.POST.get('type') == 'url':
            q = Video.objects.values('title','url_small','thumbnail_small','videoCategory_id','id').filter(url__icontains=request.POST.get('data'))
        
        else:
            q = Video.objects.values('title','url_small','thumbnail_small','videoCategory_id','id')
        
        num = request.POST.getlist('numStart[]')
        result = list(q[int(num[0]):int(num[0])+int(num[1])])
        category = list(VideoCategory.objects.values())
        add = len(list(q[int(num[0]):int(num[1])+1])) > len(result) if True else False
        return JsonResponse({'result':result,'category':category,'add_tf':add})
        
    else:
        return JsonResponse({'result':['error']})

def videoDel(request):
    if request.method=='POST':
        Video.objects.get(id=request.POST.get('id') ).delete()
        return JsonResponse({'result':'success'})
    else:
        return JsonResponse({'result':'error'})