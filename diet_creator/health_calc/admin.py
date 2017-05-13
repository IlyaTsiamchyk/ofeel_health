from django.contrib import admin
from bitfield import BitField
from bitfield.forms import BitFieldCheckboxSelectMultiple

from .models import Dish, Product, FoodCategory, FoodType

class DishAdmin(admin.ModelAdmin):
    formfield_overrides = {
        BitField: {'widget': BitFieldCheckboxSelectMultiple},
    }

# Register your models here.

admin.site.register(Dish, DishAdmin)
admin.site.register(Product)
admin.site.register(FoodCategory)
admin.site.register(FoodType)