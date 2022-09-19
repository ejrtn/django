from django.shortcuts import render
from django.http import JsonResponse
import json
from .models import Book, BookType
from django.views.decorators.csrf import csrf_exempt
from django.core import serializers
from django.db.models import Q

# Create your views here.


def Library(request):
    return render(request, 'library/library.html')

def BookList(request):
    if request.method=='POST':
        # exclude(bookType__isnull=True) not null 처리
        a = Book.objects.select_related('bookType').exclude(bookType__isnull=True)
        # print(a.query) #실행 query문 확인     
        for i in a:
            i.bookType_id = i.bookType.book_type
        return JsonResponse({'result':serializers.serialize('json',a)})
    else:
        return JsonResponse({'result':'err'})

def BookSave(request):
    if(request.method=='POST'):
        data = json.loads(request.body)
        q = BookType.objects.get(pk=data.get('book_type_id'))
        q.book_set.create(book_name=data.get('book_name'),book_writer=data.get('book_writer'),count=data.get('count'))
        
        return JsonResponse({'result':'완료'})
    else:
        return JsonResponse({"result":'err'})

def BookTypeSave(request):
    if(request.method=='POST'):
        q = BookType(book_type=json.loads(request.body).get('book_type'))
        q.save()
        return JsonResponse({"result":list(BookType.objects.values())})
    else:
        return JsonResponse({"result":'err'})

def BookTypeDel(request):
    if(request.method=='POST'):
        q = BookType.objects.get(id=json.loads(request.body).get('book_type_id'))
        q.delete()
        return JsonResponse({"result":list(BookType.objects.values())})
    else:
        return JsonResponse({"result":'err'})

def BookTypeList(request):
    if(request.method=='POST'):
        return JsonResponse({"result":list(BookType.objects.values())})
    else:
        return JsonResponse({'error':'error'})
