from django.db import models
from bitfield import BitField

# Create your models here.
class FoodType(models.Model): #vegan
    name = models.CharField(max_length=200)

    def __str__(self):
        return self.name


class FoodCategory(models.Model): #steamed, fried, boiled
    name = models.CharField(max_length=200)
    food_type = models.ManyToManyField(FoodType)

    def __str__(self):
        return self.name
    
    class Meta:
        verbose_name = "Food category"
        verbose_name_plural = "Food categories"


class Product(models.Model):
    name = models.CharField(max_length=200)
    proteinsNumber = models.IntegerField(default=0) #gramm
    lipidsNumber = models.IntegerField(default=0) #gramm
    energyValue = models.IntegerField(default=0) #kal
    cost = models.DecimalField(decimal_places=4, max_digits=100, default=0)

    def __str__(self):
        return self.name


class Dish(models.Model):
    CATEGORIES = (
        ('steamed', 'Steamed'),
        ('fried', 'Fried'),
        ('boiled', 'Boiled'),
        ('raw', 'Raw'),
    )
    
    EATING_TIME_CHOICES = (
        ('breakfast', 'Breakfast'),
        ('lunch', 'Lunch'),
        ('after_lunch', 'After lunch'),
        ('dinner', 'Dinner')
    )

    SERVE_TYPE = (
        ('garnier', 'Garnier'),
        ('desert', 'Desert'),
        ('bad', 'BAD')
    )

    food_category = models.ForeignKey(FoodCategory, on_delete=models.CASCADE)
    food_type = models.ManyToManyField(FoodType)
    products = models.ManyToManyField(Product)

    name = models.CharField(max_length=200)
    is_main = models.BooleanField(default=False)
    eating_time = BitField(flags=EATING_TIME_CHOICES)
    serve_type = BitField(flags=SERVE_TYPE, default=None)

    proteinsNumber = models.IntegerField(default=0) #gramm
    lipidsNumber = models.IntegerField(default=0) #gramm
    energyValue = models.IntegerField(default=0) #kal
    cost = models.DecimalField(decimal_places=4, max_digits=100, default=0)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "Ofeel_Dishes"

    class Meta:
        verbose_name = "Dish"
        verbose_name_plural = "Dishes"
