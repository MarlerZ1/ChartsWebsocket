from django.urls import path

from graph.consumers import GraphConsumer

ws_urlpatterns = [
    path('ws/graph/', GraphConsumer.as_asgi())
]
