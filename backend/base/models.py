from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Visit(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    def __str__(self):
        return self.name


class Client(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    profileImage = models.ImageField(null=True, blank=True)
    backgroundImage = models.ImageField(null=True, blank=True)
    visitFrequency = models.CharField(max_length=200, null=True, blank=True)
    visits = models.ForeignKey(Visit, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name
class User(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    profileImage = models.ImageField(null=True, blank=True)
    clients = models.ForeignKey(Client, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return self.name



