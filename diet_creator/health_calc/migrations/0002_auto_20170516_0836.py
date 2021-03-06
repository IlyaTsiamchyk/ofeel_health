# -*- coding: utf-8 -*-
# Generated by Django 1.10.6 on 2017-05-16 05:36
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('health_calc', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='DishesCompabilities',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.IntegerField(default=50)),
            ],
        ),
        migrations.CreateModel(
            name='DishesPheromones',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('value', models.IntegerField(default=50)),
            ],
        ),
        migrations.RenameField(
            model_name='dish',
            old_name='energyValue',
            new_name='energy',
        ),
        migrations.RenameField(
            model_name='dish',
            old_name='lipidsNumber',
            new_name='lipids',
        ),
        migrations.RenameField(
            model_name='dish',
            old_name='proteinsNumber',
            new_name='proteins',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='energyValue',
            new_name='energy',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='lipidsNumber',
            new_name='lipids',
        ),
        migrations.RenameField(
            model_name='product',
            old_name='proteinsNumber',
            new_name='proteins',
        ),
        migrations.AddField(
            model_name='dish',
            name='carbohydrates',
            field=models.IntegerField(default=0),
        ),
        migrations.AddField(
            model_name='product',
            name='carbohydrates',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='dish',
            name='is_main',
            field=models.BooleanField(default=False, verbose_name='Is main'),
        ),
        migrations.AddField(
            model_name='dishespheromones',
            name='first_dish',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dishespheromones_first_dish', to='health_calc.Dish'),
        ),
        migrations.AddField(
            model_name='dishespheromones',
            name='second_dish',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dishespheromones_second_dish', to='health_calc.Dish'),
        ),
        migrations.AddField(
            model_name='dishescompabilities',
            name='first_dish',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dishescompabilities_first_dish', to='health_calc.Dish'),
        ),
        migrations.AddField(
            model_name='dishescompabilities',
            name='second_dish',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='dishescompabilities_second_dish', to='health_calc.Dish'),
        ),
    ]
