from django.shortcuts import render
from rest_framework import viewsets
from .models import *
from .serializers import *
from .permissions import *


class CategoryViewset(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [isAdminOrReadOnly, ]


class ToyViewset(viewsets.ModelViewSet):
    queryset = Toy.objects.all()
    serializer_class = ToySerializer
    permission_classes = [isAdminOrReadOnly, ]

class FeedbackViewset(viewsets.ModelViewSet):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer
    permission_classes = [isPostOrGet, ]
