# Generated by Django 4.0.4 on 2022-04-24 18:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_visit'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='ceo',
            name='clients',
        ),
        migrations.AddField(
            model_name='ceo',
            name='clients',
            field=models.ManyToManyField(blank=True, null=True, to='base.client'),
        ),
    ]
