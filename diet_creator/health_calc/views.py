﻿import json
from rest_framework import viewsets
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes, permission_classes
from django.shortcuts import get_object_or_404, render, get_list_or_404
from datetime import datetime, timedelta

from diet_creator.health_calc.serializers import FoodTypeSerializer, FoodCategorySerializer
from diet_creator.health_calc.models import Dish, FoodType, FoodCategory, DishesCompabilities, DishesPheromones
from diet_creator.health_calc.diet_creator import *

class TypeViewSet(viewsets.ModelViewSet):
    queryset = FoodType.objects.all()
    serializer_class = FoodTypeSerializer

class CategoryViewSet(viewsets.ModelViewSet):
    queryset = FoodCategory.objects.all()
    serializer_class = FoodCategorySerializer

def test(request):
    dishes = get_list_or_404(Dish, food_type__name="Raw")
    return render(request, 'pages/test.html', {'dishes': dishes})

@api_view(['GET'])
@renderer_classes((JSONRenderer,))
@permission_classes(())
def get(request, format=None):
    """A view that returns the week plan in JSON."""
    json_data = getTestJson()
    data = json.loads(json_data)

    db_dishes = list(get_list_or_404(Dish, food_type__name = data['type']))
    dishes_compabilities = list(DishesCompabilities.objects.all())
    dishes_pheromones = list(DishesPheromones.objects.all())
    # dishes = json.dumps([dish.name for dish in db_dishes])

    result_dishes = create_diet(db_dishes, 0, data['clientInfo'], dishes_compabilities, dishes_pheromones)
    serialized_dishes = [dish.name for dish in result_dishes]

    return Response({'dishes': json.dumps(serialized_dishes)})

@api_view(['POST'])
@renderer_classes((JSONRenderer,))
@permission_classes(())
def rest(request, format=None):
    """A view that returns the week plan in JSON."""
    db_dishes = list(get_list_or_404(Dish))
    dishes = json.dumps([dish.name for dish in db_dishes])

    return Response({'dishes': json.dumps(dishes)})

def getTestJson():
    data = {}
    data['category'] = "boiled"
    data['type'] = "raw"
    data['positivePreferencies'] = [("dill", 2), ("parsley", 4)]
    data['negativePreferencies'] = [("parsley", 3)]
    data['clientInfo'] = getTestClientInfo()

    return json.dumps(data)

def getTestClientInfo():
    years = 25
    days_per_year = 365.24

    data = {}

    data['name'] = "Test"
    data['height'] = 170
    data['weight'] = 60
    data['sex'] = 0
    data['birth_date'] = str(datetime.now() - timedelta(days=(years*days_per_year)))
    data['foodMode'] = 1
    data['intestinalParameters'] = 1
    data['activity'] = 1

    return data