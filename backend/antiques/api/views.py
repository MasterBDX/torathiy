
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_200_OK

from .serializers import AntiqueDetailSerializer,AntiqueLocationSerializer


from ..models import Antique,AntiqueLocation


@api_view(['GET'])
def antique_detail_api_view(request, id):
    antique = Antique.objects.filter(uid=str(id)).last()
    if antique:
        data = AntiqueDetailSerializer(
            antique, context={"request": request}).data
        return Response(data, status=HTTP_200_OK)
    return Response({"msg": "المعلم غير موجود"}, status=HTTP_404_NOT_FOUND)


@api_view(['GET'])
def locations_api_view(request):
    locations = AntiqueLocation.objects.all()
    data = AntiqueLocationSerializer(locations,many=True).data
    return Response(data, status=HTTP_200_OK)

