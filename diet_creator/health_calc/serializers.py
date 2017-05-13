from diet_creator.health_calc.models import FoodType, FoodCategory
from rest_framework import serializers

class FoodTypeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = FoodType
        fields = ('name',) 

class FoodCategorySerializer(serializers.HyperlinkedModelSerializer):
    food_type = FoodTypeSerializer(required=False)

    class Meta:
        model = FoodCategory
        fields = ('name', 'type')
