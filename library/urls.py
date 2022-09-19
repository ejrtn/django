from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('', views.Library, name='library'),
    path('error/', views.Library, name='error'),
    path('BookTypeList/', views.BookTypeList, name='BookTypeList'),
    path('BookTypeSave/', views.BookTypeSave, name='BookTypeSave'),
    path('BookTypeDel/', views.BookTypeDel, name='BookTypeDel'),
    path('BookSave/', views.BookSave, name='BookSave'),
    path('BookList/', views.BookList, name='BookList'),
]
