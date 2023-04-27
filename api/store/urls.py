from django.urls import path, include
from rest_framework import routers
from .views import *


router = routers.SimpleRouter()
router.register(r'toys', ToyViewset)
router.register(r'cats', CategoryViewset)
router.register(r'feedback', FeedbackViewset)

urlpatterns = [
    path('', include(router.urls))
]