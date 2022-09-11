from django.contrib import admin

from .models import (AntiqueType, AntiqueLocation,
                     Antique, AntiqueImage, Reference,
                     )


@admin.register(AntiqueType)
class AntiqueTypeAdmin(admin.ModelAdmin):
    list_display = ['name', 'id']


@admin.register(AntiqueLocation)
class AntiqueLocationAdmin(admin.ModelAdmin):
    list_display = ['country', 'city', "latitude", "longitude"]


@admin.register(Antique)
class AntiqueAdmin(admin.ModelAdmin):
    list_display = ['name', 'id', "religion", "timestamp"]


@admin.register(AntiqueImage)
class AntiqueImageAdmin(admin.ModelAdmin):
    list_display = ['antique', 'id', 'image']


@admin.register(Reference)
class ReferenceAdmin(admin.ModelAdmin):
    list_display = ['name', 'date',
                    'url', "description",
                    "antique"]
