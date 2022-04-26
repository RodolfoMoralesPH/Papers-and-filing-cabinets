from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import *
from .serializers import *
# Create your views here.
@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/jobs/',
        '/api/jobs/create/',

        '/api/jobs/upload/',

        '/api/jobs/<id>/reviews/',

        '/api/jobs/top/',
        '/api/jobs/<id>',

        '/api/jobs/delete/<id>/',
        '/api/jobs/<update>/<id>/',

        '/api/clients/',
        '/api/clients/<id>',


    ]
    return Response(routes)

@api_view(['GET'])
def getJobs(request):
    jobs = Job.objects.all()
    serializer = JobSerializer(jobs, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getJob(request, pk):
    job = Job.objects.get(_id=pk)
    serializer = JobSerializer(job, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getClients(request):
    clients = Client.objects.all()
    serializer = ClientSerializer(clients, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getClient(request, pk):
    client = Client.objects.get(_id=pk)
    serializer = ClientSerializer(client, many=False)
    return Response(serializer.data)

@api_view(['GET'])
def getVisits(request, pk):
    client = Client.objects.get(_id=pk)
    visits = Visit.objects.filter(client = pk)
    serializer = VisitSerializer(visits, many=True)
    return Response(serializer.data)
