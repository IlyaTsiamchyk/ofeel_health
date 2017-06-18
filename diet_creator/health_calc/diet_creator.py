import copy
import operator
import random
from datetime import datetime
from enum import Enum

VALUE_WEIGHTS = {
    'proteins': 1.2
}

ACTIVITY_MULTIPLIERS = {
    'bmr' : 1, #basal_metabolic_rate
    'sedentary' : 1.2, #little or no exercise
    'lightly_active' : 1.375, #exercise/sports 1-3 times/week
    'moderatetely_active' : 1.55, #exercise/sports 3-5 times/week
    'very_active' : 1.725, #hard exercise/sports 6-7 times/week
    'extra_active' : 1.9, #very hard exercise/sports or physical job
}

class Food_modes(Enum):
    NORMAL = 1
    LOW_CARB = 2
    LOW_FAT = 3
    LOW_CALORIE = 4


def create_diet(dishes, food_types, client_info, dishes_compabilities=[], dishes_pheromones=[]):
    days_in_week = 7
    diet = []
    freese_dishes = []
    previous_dish = None
    
    AVERAGE_BODY_REQUIREMENTS = get_week_body_requirements(client_info)
    left_body_requirements = copy.copy(AVERAGE_BODY_REQUIREMENTS)

    for i in range(7): 
        requirements_weights = get_requirements_weights(AVERAGE_BODY_REQUIREMENTS[i], left_body_requirements[i])
        dish_to_eat = get_dish(dishes, requirements_weights, dishes_compabilities, previous_dish)
    
        diet.append(dish_to_eat)
        freese_dishes.append(dish_to_eat)
        previous_dish = dish_to_eat

        update_weights()

    return diet


def get_requirements_weights(average_requirements, requirements):
    requirements_weights = {}

    for key in requirements:
        requirements_weights[key] = requirements[key] / average_requirements[key]

    return sorted(requirements_weights.items(), key=operator.itemgetter(1), reverse=True)


def get_dish(dishes, requirements_weights, dishes_compabilities, previous_dish):    
    sutisfied_dishes = find_most_required_dishes(dishes, requirements_weights)
    
    values = {}
    weights = []

    for i in range(len(sutisfied_dishes)):
        compability = [el.value for el in dishes_compabilities if el.first_dish == previous_dish and el.second_dish == sutisfied_dishes[i]]
        dish_value = get_dish_value(sutisfied_dishes[i], requirements_weights) * (compability[0] / 50 if compability else 1)
        values[i] = dish_value

    dish_number = weighted_choice(values)

    return sutisfied_dishes[dish_number]


def find_most_required_dishes(dishes, requirements_weights):
    num_to_select = 2
    most_required_element = requirements_weights[0][0]

    most_required_dishes = sorted(dishes, key=operator.attrgetter(most_required_element), reverse=True)[:100]
    
    return random.sample(most_required_dishes, num_to_select)


def get_dish_value(dish, requirements_weights):
    value = 0

    #TODO: Add pheromones counting
    for key, val in requirements_weights:
        value += getattr(dish, str(key)) * val * 1

    return value


def weighted_choice(choices):
   total = sum(choices.values())
   r = random.uniform(0, total)
   upto = 0
   for c, w in choices.items():
      if upto + w >= r:
         return c
      upto += w
   assert False, "Shouldn't get here"


def update_weights():
    pass
    

def get_week_body_requirements(client_info):
    week_requirements = []
    day_requirements = get_day_body_requirements(client_info)

    days_multipliers = [1.2, 0.8, 1.2, 0.8, 1.2, 1, 1] #depends on day load

    for i in range(7):
        week_requirements.append({key: val * days_multipliers[i] for key, val in day_requirements.items()})
        
    return week_requirements

def get_day_body_requirements(client_info):
    carbohydrates_percent, lipids_percent, proteins_percent = get_carb_fat_protein_percents(Food_modes(client_info['foodMode']))
    
    calorie_in_carbohydrates_gram = 3.758   
    calorie_in_lipids_gram = 8.817
    calorie_in_proteins_gram = 4.06

    sex = client_info['sex']
    weight = client_info['weight']
    height = client_info['height']
    age = datetime.now().year - datetime.strptime(client_info['birth_date'][:4], "%Y").year
    sex_calories_offset = 5 if sex == 0 else -161

    BODY_REQUIREMENTS = {}
    BODY_REQUIREMENTS['energy'] = 10 * weight + 6.25 * height - 5 * age + sex_calories_offset
    BODY_REQUIREMENTS['proteins'] = BODY_REQUIREMENTS['energy'] / calorie_in_proteins_gram * proteins_percent / 100 #1.4 * weight #0.8-1.8 gram/kg of body weight or 10%-35% of calories
    BODY_REQUIREMENTS['carbohydrates'] = BODY_REQUIREMENTS['energy'] / calorie_in_carbohydrates_gram * carbohydrates_percent / 100
    BODY_REQUIREMENTS['lipids'] = BODY_REQUIREMENTS['energy'] / calorie_in_lipids_gram * lipids_percent / 100

    return BODY_REQUIREMENTS

def get_carb_fat_protein_percents(food_mode):    
    carbohydrates_percent = 50 #from 40 to 75 % of calories
    lipids_percent = 30 #from 20 to 35 % of calories
    proteins_percent = 20 #10%-35% of calories

    switcher = {
        Food_modes.NORMAL : (53, 27, 20),
        Food_modes.LOW_CARB : (40, 32, 28),
        Food_modes.LOW_FAT : (50, 20, 30)
    }

    return switcher[food_mode]