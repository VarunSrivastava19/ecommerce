# Generated by Django 5.0.1 on 2024-01-22 18:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0002_product_description'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='compete',
            new_name='complete',
        ),
    ]