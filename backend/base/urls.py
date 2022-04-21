from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('clients/', views.getClients, name='clients'),
    path('clients/<str:pk>/', views.getClient, name='client')

]