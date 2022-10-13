from django.urls import path

from . import views

urlpatterns = [
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
    path('join/', views.join, name='join'),
    path('info/', views.info, name='info'),
    path('loginCheck/',views.loginCheck, name='loginCheck'),
]