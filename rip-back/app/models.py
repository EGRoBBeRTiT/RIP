from django.db import models
from django.utils.timezone import now as date_now

from authentication.models import User


class Product(models.Model):
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=100, blank=True, null=True)
    type = models.CharField(max_length=100, blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)
    strength = models.IntegerField(blank=True, null=True)

    def __str__(self) -> str:
        return self.name


class Cart(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='cart',
                                related_query_name='cart')
    products = models.ManyToManyField(Product, verbose_name="products", blank=True)

    def __str__(self) -> str:
        return self.user.get_short_name() + 'cart'


class Order(models.Model):
    class Status(models.TextChoices):
        ordered = "ordered"
        approved = 'approved'
        picked_up = 'picked_up'
        rejected = 'rejected'

    order_date = models.DateTimeField(default=date_now, blank=True)
    approval_date = models.DateTimeField(blank=True, null=True)
    pickup_date = models.DateTimeField(blank=True, null=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders', related_query_name='orders_query')
    products = models.ManyToManyField(Product, verbose_name="products")
    status = models.CharField(default=Status.ordered, max_length=20, blank=True, choices=Status.choices)

    def __str__(self) -> str:
        return self.user.get_short_name() + 'order'
