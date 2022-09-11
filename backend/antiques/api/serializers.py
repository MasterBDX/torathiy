from dataclasses import field
from multiprocessing import context
from rest_framework import serializers

from ..models import (Antique, AntiqueLocation,
                      AntiqueImage)


class AntiqueLocationSerializer(serializers.ModelSerializer):
    city = serializers.SerializerMethodField()

    class Meta:
        model = AntiqueLocation
        fields = ['id','country', 'city','place', 'latitude', 'longitude']

    def get_city(self, obj):
        return obj.city.name


class AntiqueImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = AntiqueImage
        fields = ["image"]

    def get_image(self, obj):
        request = self.context.get("request")
        return request.build_absolute_uri(obj.image.url)


class AntiqueReferenceSerializer(serializers.ModelSerializer):
    class Meta:
        model = AntiqueLocation
        fields = ['name', 'date', 'url', 'description']


class AntiqueDetailSerializer(serializers.ModelSerializer):
    location = serializers.SerializerMethodField()
    main_image = serializers.SerializerMethodField()
    images = serializers.SerializerMethodField()
    references = serializers.SerializerMethodField()
    build_type = serializers.SerializerMethodField()

    class Meta:
        model = Antique
        fields = ["name", "overview", "description",
                  "location", "religion", "origin",
                  "main_image", "start_date", "end_date",
                  "images", "references", "build_type"]

    def get_location(self, obj):
        return AntiqueLocationSerializer(obj.location).data

    def get_main_image(self, obj):
        request = self.context.get("request")
        return request.build_absolute_uri(obj.get_main_image())

    def get_images(self, obj):
        images = obj.images.all()
        request = self.context.get("request")
        data = AntiqueImageSerializer(
            images, many=True, context={"request": request}).data
        return data

    def get_references(self, obj):
        references = obj.references.all()
        return AntiqueReferenceSerializer(references, many=True).data

    def get_build_type(self, obj):
        return obj.type_of_build.name
