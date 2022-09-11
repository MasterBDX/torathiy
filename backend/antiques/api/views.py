
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND, HTTP_200_OK

from .serializers import AntiqueDetailSerializer

from ..models import Antique


@api_view(['GET'])
def antique_detail_api_view(request, id):
    antique = Antique.objects.filter(pk=id).last()
    if antique:
        data = AntiqueDetailSerializer(
            antique, context={"request": request}).data
        return Response(data, status=HTTP_200_OK)
    return Response({"msg": "المعلم غير موجود"}, status=HTTP_404_NOT_FOUND)
