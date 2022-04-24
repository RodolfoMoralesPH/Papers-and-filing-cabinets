# Generated by Django 4.0.4 on 2022-04-24 03:03

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('base', '0002_remove_user_clients_delete_client_delete_user_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Client',
            fields=[
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('profileImage', models.ImageField(blank=True, null=True, upload_to='')),
                ('backgroundImage', models.ImageField(blank=True, null=True, upload_to='')),
                ('visitFrequency', models.CharField(blank=True, max_length=200, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Job',
            fields=[
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('companyName', models.CharField(blank=True, max_length=200, null=True)),
                ('jobType', models.CharField(choices=[('Houses', 'Houses'), ('Hourly', 'Hourly')], max_length=200)),
                ('jobImage', models.ImageField(blank=True, null=True, upload_to='')),
                ('first_day', models.DateTimeField(blank=True, null=True)),
                ('last_day', models.DateTimeField(blank=True, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
            ],
        ),
        migrations.CreateModel(
            name='Visit',
            fields=[
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('date', models.DateTimeField(auto_now_add=True, null=True)),
                ('cost', models.DecimalField(blank=True, decimal_places=2, max_digits=7, null=True)),
                ('isPaid', models.BooleanField(default=False)),
                ('paidAt', models.DateTimeField(blank=True, null=True)),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('client', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.client')),
            ],
        ),
        migrations.CreateModel(
            name='Ceo',
            fields=[
                ('name', models.CharField(blank=True, max_length=200, null=True)),
                ('profileImage', models.ImageField(blank=True, null=True, upload_to='')),
                ('_id', models.AutoField(editable=False, primary_key=True, serialize=False)),
                ('clients', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='base.client')),
                ('user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]