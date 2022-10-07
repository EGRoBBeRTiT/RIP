from datetime import date

from django.http import HttpResponse
from django.shortcuts import render

# from lab1.main.models import 
from .models import *

# Create your views here.


def GetOrders(request):
    return render(request, 'orders.html', {'data' : {
        'current_date': date.today(),
        'coffee': Coffee.objects.all()
    }})


def GetOrder(request, id):
    return render(request, 'order.html', {'data' : {
        'current_date': date.today(),
        'coffee': Coffee.objects.filter(id=id)[0]
    }})

def hello(request):
    return render(request, 'index.html', { 'data' : {
        'current_date': date.today(),
        'list': ['python', 'django', 'html']
    }})
