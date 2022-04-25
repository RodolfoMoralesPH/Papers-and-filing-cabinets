from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('clients/', views.getClients, name='clients'),
    path('clients/<str:pk>/', views.getClient, name='client'),
    path('jobs/', views.getJobs, name='jobs'),
    path('jobs/<str:pk>/', views.getJob, name='job')
]