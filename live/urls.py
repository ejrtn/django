from django.urls import path

from . import views

urlpatterns = [
    
    path('<str:user_id>/live', views.live, name='live'),
    path('<str:user_id>/liveFull', views.liveFull, name='liveFull'),
    path('liveList', views.liveList, name='liveList'),
    path('liveUserSrc', views.liveUserSrc, name='liveUserSrc'),
]