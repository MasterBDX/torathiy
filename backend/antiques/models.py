from sqlite3 import Timestamp
from django.db import models

from django.utils.translation import gettext_lazy as _

from ckeditor.fields import RichTextField

from core.models import City


class AntiqueType(models.Model):
    name = models.CharField(_("Name"), max_length=255)
    timestamp = models.DateTimeField(_("Timestamp"), auto_now_add=True)
    updated = models.DateTimeField(_("Updated"), auto_now=True)

    def __str__(self):
        return self.name


class AntiqueLocation(models.Model):
    country = models.CharField(_("Country"), max_length=255)
    city = models.ForeignKey(City, verbose_name=_(
        "City"), on_delete=models.SET_NULL, blank=True, null=True)
    latitude = models.CharField(_("Latitude"), max_length=255)
    longitude = models.CharField(_("Longitude"), max_length=255)


class Antique(models.Model):
    uid = models.CharField(_("Unique ID"), max_length=255)    
    name = models.CharField(_("Name"), max_length=255)
    overview = models.CharField(_("Name"), max_length=255)
    description = RichTextField(_("Name"), max_length=255)
    location = models.OneToOneField(AntiqueLocation,
                                    related_name='location',
                                    on_delete=models.SET_NULL,
                                    null=True, blank=True)
    religion = models.CharField(_("Religion"), max_length=255)
    origin = models.CharField(_("Origin"), max_length=255)
    main_image = models.ImageField(_("Main Image"), null=True, blank=True)
    start_date = models.DateTimeField(_("Start Date"), null=True, blank=True)
    end_date = models.DateTimeField(_("End Date"), null=True, blank=True)
    type_of_build = models.ForeignKey(AntiqueType, verbose_name=_("Type Of Build"),
                                      on_delete=models.SET_NULL, null=True, blank=True)

    timestamp = models.DateTimeField(_("Timestamp"), auto_now_add=True)
    updated = models.DateTimeField(_("Updated"), auto_now=True)


class Reference(models.Model):
    name = models.CharField(_("Name"), max_length=255)
    date = models.DateField(_("Date"), null=True, blank=True)
    url = models.URLField(_("Url"), null=True, blank=True)
    description = models.TextField(_("Description"), null=True, blank=True)

    def __str__(self):
        return self.name
