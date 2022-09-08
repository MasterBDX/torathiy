from django.db import models
from django.utils.translation import pgettext_lazy, gettext_lazy as _, get_language


class City(models.Model):
    name = models.CharField(_("City"), max_length=255)
    foreign_name = models.CharField(_("Foreign City"), max_length=255)
    state = models.CharField(
        _("Country State"), max_length=255,
        null=False, blank=False)

    def __str__(self):
        lang = get_language()
        if lang == "ar":
            return self.name
        return self.foreign_name

    class Meta:
        verbose_name = _("City")
        verbose_name_plural = _("Cities")
        ordering = ["name"]
