# Generated by Django 4.1.3 on 2022-12-25 13:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0010_alter_order_status'),
    ]

    operations = [
        migrations.AlterField(
            model_name='order',
            name='status',
            field=models.CharField(blank=True, choices=[('ordered', 'Ordered'), ('approved', 'Approved'), ('picked_up', 'Picked Up'), ('rejected', 'Rejected')], default='ordered', max_length=20),
        ),
    ]
