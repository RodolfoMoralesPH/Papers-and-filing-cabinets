from django.db import models
from django.contrib.auth.models import User

# Create your models here.



class Job(models.Model):
    TYPE_CHOICES = (
        ('Houses', 'Houses'),
        ('Hourly', 'Hourly'),
    )
    name = models.CharField(max_length=200, null=True, blank=True)
    companyName = models.CharField(max_length=200, null=True, blank=True)
    jobType = models.CharField(max_length=200, choices=TYPE_CHOICES)
    jobImage = models.ImageField(null=True, blank=True)
    first_day = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    last_day = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)
    def __str__(self):
        return self.name


class Client(models.Model):
    name = models.CharField(max_length=200, null=True, blank=True)
    profileImage = models.ImageField(null=True, blank=True)
    backgroundImage = models.ImageField(null=True, blank=True)
    visitFrequency = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

class Visit(models.Model):
    client = models.ForeignKey(Client, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    date = models.DateTimeField(auto_now_add=True)
    cost = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False, blank=True)
    def __str__(self):
        return f'{self.name} {self.client} {self.isPaid}'
        

class Ceo(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    profileImage = models.ImageField(null=True, blank=True)
    clients = models.ManyToManyField(Client, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False, blank=True)

    def __str__(self):
        return self.name
