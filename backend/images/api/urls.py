from django.urls import path
from .views import AntiquesDataFetchAPIView

app_name = 'api-images'

urlpatterns = [
    path('upload/', AntiquesDataFetchAPIView.as_view(), name='upload')
]
