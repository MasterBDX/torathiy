from django.contrib import admin

from .models import UploadedImage


@admin.register(UploadedImage)
class ImageAdmin(admin.ModelAdmin):
    list_display = ['timestamp', 'image']
