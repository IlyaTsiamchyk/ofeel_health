import json
from rest_framework import viewsets
from rest_framework.renderers import JSONRenderer
from rest_framework.response import Response
from rest_framework.decorators import api_view, renderer_classes, permission_classes
from django.shortcuts import get_object_or_404, render, get_list_or_404

from diet_creator.health_calc.serializers import FoodTypeSerializer, FoodCategorySerializer
from diet_creator.health_calc.models import Dish, FoodType, FoodCategory
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
def rest(request, format=None):
    """A view that returns the week plan in JSON."""
    json_data = getTestJson()
    data = json.loads(json_data)

    db_dishes = list(get_list_or_404(Dish, food_type__name = data['Type']))
    dishes = json.dumps([dish.name for dish in db_dishes])

    create_diet(db_dishes, 0, {})
    return Response({'dishes': dishes})

def getTestJson():
    data = {}
    data['Category'] = "Boiled"
    data['Type'] = "Raw"
    data['PositivePreferencies'] = [("Dill", 2), ("Parsley", 4)]
    data['NegativePreferencies'] = [("Parsley", 3)]

    return json.dumps(data)