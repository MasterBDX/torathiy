from django.db import models

from django.utils.translation import gettext_lazy as _

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
    place = models.CharField(_("Place"), max_length=255, blank=True, null=True)
    latitude = models.CharField(_("Latitude"), max_length=255)
    longitude = models.CharField(_("Longitude"), max_length=255)


class Antique(models.Model):
    uid = models.CharField(_("Unique ID"), max_length=255)
    name = models.CharField(_("Name"), max_length=255)
    overview = models.CharField(_("Overview"), max_length=255)
    description = models.TextField(_("Description"))
    location = models.OneToOneField(AntiqueLocation,
                                    related_name='location',
                                    on_delete=models.SET_NULL,
                                    null=True, blank=True)
    religion = models.CharField(_("Religion"), max_length=255)
    origin = models.CharField(_("Origin"), max_length=255)
    main_image = models.ImageField(_("Main Image"), null=True, blank=True)
    start_date = models.CharField(
        _("Start Date"), null=True, blank=True, max_length=255)
    end_date = models.CharField(
        _("End Date"), null=True, blank=True, max_length=255)
    type_of_build = models.ForeignKey(AntiqueType, verbose_name=_("Type Of Build"),
                                      on_delete=models.SET_NULL, null=True, blank=True)

    timestamp = models.DateTimeField(_("Timestamp"), auto_now_add=True)
    updated = models.DateTimeField(_("Updated"), auto_now=True)

    def __str__(self):
        return self.name

    def get_main_image(self):
        try:
            url = self.main_image.url
        except ValueError:
            url = None
        return url


class AntiqueImage(models.Model):
    image = models.ImageField(_("Image"))
    antique = models.ForeignKey(Antique, on_delete=models.CASCADE,
                                related_name='images', verbose_name=_("Antique"))
    timestamp = models.DateTimeField(_("Timestamp"), auto_now_add=True)
    updated = models.DateTimeField(_("Updated"), auto_now=True)


class Reference(models.Model):
    name = models.CharField(_("Name"), max_length=255)
    date = models.DateField(_("Date"), null=True, blank=True)
    url = models.URLField(_("Url"), null=True, blank=True)
    description = models.TextField(_("Description"), null=True, blank=True)
    antique = models.ForeignKey(
        Antique, related_name='references', verbose_name=_("Antique"),
        on_delete=models.CASCADE)

    def __str__(self):
        return self.name
