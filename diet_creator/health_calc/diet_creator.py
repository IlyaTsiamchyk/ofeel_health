import copy

VALUE_WEIGHTS = {
    'proteinsNumber': 1.2
}


def create_diet(dishes, food_types, body_features):
    diet = {}
    freese_dishes = {}
    
    AVERAGE_BODY_REQUIREMENTS = get_body_requirements(body_features)
    left_body_requirements = copy.copy(AVERAGE_BODY_REQUIREMENTS)

    requirements_weights = get_requirements_weights(AVERAGE_BODY_REQUIREMENTS, left_body_requirements)
    sutisfied_dishes = find_dishes_with_max_requirement(requirements_weights)

    count_use_value(dishes[0], left_body_requirements, AVERAGE_BODY_REQUIREMENTS)

    dish_to_eat = get_dish(sutisfied_dishes)

    diet.update(dish_to_eat)
    freese_dishes.update(dish_to_eat)
    update_weights()

    return diet


def count_use_value(dish, requirements_left, total_requirements):
    temp_value_weights = get_temp_weights(requirements_left, total_requirements)

    test = dish.proteinsNumber * temp_value_weights['proteinsNumber']
    requirements_left['proteinsNumber'] = requirements_left['proteinsNumber'] - 10

def get_body_requirements(body_features):
    BODY_REQUIREMENTS = {
        'proteinsNumber': 100
    }
    #TODO: add personal height etc counting

    return BODY_REQUIREMENTS


def get_requirements_weights(average_requirements, requirements):
    return {}


def find_dishes_with_max_requirement(requirements_weights):
    max_requirement = find_max_requirement(requirements_weights)
    return {}


def find_max_requirement(requirements_weights):
    return {}


def get_dish_weight(dish):
    return 0


def get_dish(sutisfied_dishes):
    weights = {}

    for i in range(len(sutisfied_dishes)):
        weights[i] = get_dish_weight(sutisfied_dishes[i])

    # dish = colony.choose_way()
    return {}


def get_temp_weights(requirements_left, total_requirements):
    temp_value_weights = copy.copy(VALUE_WEIGHTS)

    for key in temp_value_weights:
        temp_value_weights[key] = temp_value_weights[key] + requirements_left[key] / total_requirements[key]

    return temp_value_weights

def update_weights():
    pass