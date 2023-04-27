from dataclasses import fields
from rest_framework import serializers
from .models import *



class ToySerializer(serializers.ModelSerializer):
    class Meta:
        model = Toy
        fields = '__all__'
        depth = 1

class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'
        depth = 1


class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'