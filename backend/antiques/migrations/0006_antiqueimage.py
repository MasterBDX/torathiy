# Generated by Django 4.1 on 2022-09-10 10:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('antiques', '0005_alter_antique_description_alter_antique_overview'),
    ]

    operations = [
        migrations.CreateModel(
            name='AntiqueImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='', verbose_name='Image')),
                ('timestamp', models.DateTimeField(auto_now_add=True, verbose_name='Timestamp')),
                ('updated', models.DateTimeField(auto_now=True, verbose_name='Updated')),
                ('antique', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='images', to='antiques.antique', verbose_name='Antique')),
            ],
        ),
    ]
