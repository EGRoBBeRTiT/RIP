# Generated by Django 4.1.3 on 2022-12-21 18:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_order_status_alter_cart_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(default='Отклонен', max_length=20),
        ),
    ]
