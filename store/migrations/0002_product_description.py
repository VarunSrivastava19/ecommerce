# Generated by Django 5.0.1 on 2024-01-22 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='description',
            field=models.CharField(blank=True, max_length=200, null=True),
        ),
    ]
