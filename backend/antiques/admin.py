from django.contrib import admin

from .models import AntiqueType, AntiqueLocation, Antique


@admin.register(AntiqueType)
class AntiqueTypeAdmin(admin.ModelAdmin):
    list_display = ['name', 'id']


@admin.register(AntiqueLocation)
class AntiqueLocationAdmin(admin.ModelAdmin):
    list_display = ['country', 'city', "latitude", "longitude"]


@admin.register(Antique)
class AntiqueAdmin(admin.ModelAdmin):
    list_display = ['name', 'id', "religion", "timestamp"]
