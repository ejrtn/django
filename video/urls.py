from django.urls import path

from . import views

urlpatterns = [
    path('', views.main, name='main'),
    path('edit/', views.edit, name='edit'),
    path('videoSave/', views.videoSave, name='videoSave'),
    path('videoList/', views.videoList, name='videoList'),
    path('videoDel/', views.videoDel, name='videoDel'),
]