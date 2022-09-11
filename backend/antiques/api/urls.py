from django.urls import path
from .views import antique_detail_api_view, locations_api_view

app_name = 'api-antiques'

urlpatterns = [
    path('locations/', locations_api_view, name='locations'),
    path('<int:id>/detail/', antique_detail_api_view, name='antique_detail')
]
