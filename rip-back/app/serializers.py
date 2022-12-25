from drf_spectacular.utils import extend_schema_serializer, OpenApiExample
from rest_framework import serializers

from authentication.serializers import UserSerializer
from .models import *
from django.core.exceptions import ValidationError

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product

        fields = ["id", "name", "brand", "type", "price", "strength"]


@extend_schema_serializer(
    examples=[
        OpenApiExample(
            'Valid example 1',
            summary='application.json',
            description='Products id',
            value={
                'products': [1,
                             2,
                             3],
            },
            request_only=True,  # signal that example only applies to requests
            response_only=False,  # signal that example only applies to responses
        ),
    ]
)
class CartSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    products = ProductSerializer(many=True)

    class Meta:
        model = Cart

        fields = ['id', "user", "products"]

    def update(self, instance, validated_data):
        product_ids = validated_data.pop('products')
        products = Product.objects.filter(pk__in=product_ids)
        instance.products.set(products)
        instance.save()

        return instance


class OrderSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    products = ProductSerializer(many=True)

    class Meta:
        model = Order

        fields = ['id', "user", "products", 'order_date', 'approval_date', 'pickup_date', 'status']

    def update(self, instance, validated_data):
        try:
            instance.status = validated_data.get("status", instance.status)
            instance.full_clean()
            instance.save()
            return instance
        except ValidationError as e:
            raise ValidationError(e.messages)

