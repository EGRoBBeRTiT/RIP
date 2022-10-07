from django.db import models


class Coffee(models.Model):
    name = models.CharField(max_length=100)
    volume = models.IntegerField(blank=True, null=True)
    price = models.IntegerField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'coffee'


class CoffeeOrder(models.Model):
    order = models.ForeignKey('Order', models.DO_NOTHING)
    coffee = models.ForeignKey(Coffee, models.DO_NOTHING)

    class Meta:
        managed = False
        db_table = 'coffee_order'


class Customer(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'customer'


class Order(models.Model):
    customer = models.ForeignKey(Customer, models.DO_NOTHING)
    date = models.DateField()

    class Meta:
        managed = False
        db_table = 'order'