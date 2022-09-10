from dataclasses import field
from rest_framework import serializers

from ..models import Antique

class AntiqueDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Antique
        fields = ["name","overview"]
