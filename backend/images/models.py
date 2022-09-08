from django.db import models
from .utils import upload_to


class UploadedImage(models.Model):
    image = models.ImageField(upload_to=upload_to,
                              blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'{self.timestamp}'
