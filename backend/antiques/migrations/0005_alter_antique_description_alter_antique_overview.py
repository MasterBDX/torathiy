# Generated by Django 4.1 on 2022-09-10 10:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('antiques', '0004_antique_uid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='antique',
            name='description',
            field=models.TextField(verbose_name='Description'),
        ),
        migrations.AlterField(
            model_name='antique',
            name='overview',
            field=models.CharField(max_length=255, verbose_name='Overview'),
        ),
    ]
