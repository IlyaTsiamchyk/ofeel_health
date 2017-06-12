import copy
import operator
import random

VALUE_WEIGHTS = {
    'proteins': 1.2
}


def create_diet(dishes, food_types, body_features, dishes_compabilities):
    diet = []
    freese_dishes = []
    previous_dish = None
    
    AVERAGE_BODY_REQUIREMENTS = get_body_requirements(body_features)
    left_body_requirements = copy.copy(AVERAGE_BODY_REQUIREMENTS)

    requirements_weights = get_requirements_weights(AVERAGE_BODY_REQUIREMENTS, left_body_requirements)
    dish_to_eat = get_dish(dishes, requirements_weights, dishes_compabilities, previous_dish)
    
    diet.append(dish_to_eat)
    freese_dishes.append(dish_to_eat)
    update_weights()

    return diet


def get_body_requirements(body_features):
    BODY_REQUIREMENTS = {
        'proteins': 100,
        'lipids': 100,
        'carbohydrates': 100,
        'energy': 1000
    }
    #TODO: add personal height etc counting

    return BODY_REQUIREMENTS


def get_requirements_weights(average_requirements, requirements):
    requirements_weights = {}

    for key in requirements:
        requirements_weights[key] = requirements[key] / average_requirements[key]

    return sorted(requirements_weights.items(), key=operator.itemgetter(1), reverse=True)


def get_dish(dishes, requirements_weights, dishes_compabilities, previous_dish):    
    sutisfied_dishes = find_most_required_dishes(dishes, requirements_weights)
    
    values = []
    weights = []

    for i in range(len(sutisfied_dishes)):
        values.append((i, get_dish_value(sutisfied_dishes[i], requirements_weights)))

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
   total = sum(w for c, w in choices)
   r = random.uniform(0, total)
   upto = 0
   for c, w in choices:
      if upto + w >= r:
         return c
      upto += w
   assert False, "Shouldn't get here"


def update_weights():
    pass