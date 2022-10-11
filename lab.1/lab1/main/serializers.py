from .models import *
from rest_framework import serializers


class CoffeeSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Coffee
        # Поля, которые мы сериализуем
        fields = ["name", "volume", "price"]

class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        # Модель, которую мы сериализуем
        model = Customer
        # Поля, которые мы сериализуем
        fields = ["name", "phone", "email"]

class OrderSerializer(serializers.ModelSerializer):
    customer = CustomerSerializer
    class Meta:
        # Модель, которую мы сериализуем
        model = Order
        # Поля, которые мы сериализуем
        fields = ["customer", "date"]

class CoffeeOrderSerializer(serializers.ModelSerializer):
    order = OrderSerializer
    coffee = CoffeeSerializer
    class Meta:
        # Модель, которую мы сериализуем
        model = CoffeeOrder
        # Поля, которые мы сериализуем
        fields = ["order", "coffee"]