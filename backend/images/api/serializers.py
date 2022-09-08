from rest_framework import serializers
from images.models import UploadedImage


class ImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)

    class Meta:
        model = UploadedImage
        fields = ['image']
