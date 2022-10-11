from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework import  status
from rest_framework.response import Response
from .models import *
from .serializers import *


class CoffeeViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Coffee.objects.all().order_by('pk')
    serializer_class = CoffeeSerializer  # Сериализатор для модели

    def list(self, request):
        queryset = Coffee.objects.all()
        serializer = CoffeeSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Coffee.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = CoffeeSerializer(user)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try: 
            coffee = Coffee.objects.get(pk=pk) 
        except Coffee.DoesNotExist: 
            return Response({'message': 'The coffee does not exist'}, status=status.HTTP_404_NOT_FOUND) 
        serializer = CoffeeSerializer(coffee, data=request.data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
    
    def destroy(self, request, pk=None):
        instance = self.get_object()
        return super(CoffeeViewSet, self).destroy(request, pk)

        try:
            coffee = Coffee.objects.get(pk=pk)
        except Coffee.DoesNotExist: 
            return Response({'message': 'The product does not exist'}, status=status.HTTP_404_NOT_FOUND) 
        coffee.delete()
        return Response({'message': ' Successfully deleted'}, status=status.HTTP_200_OK)

class CustomerViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Customer.objects.all().order_by('pk')
    serializer_class = CustomerSerializer  # Сериализатор для модели

    def list(self, request):
        queryset = Customer.objects.all()
        serializer = CustomerSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Customer.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = CustomerSerializer(user)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try: 
            customer = Customer.objects.get(pk=pk) 
        except Customer.DoesNotExist: 
            return Response({'message': 'The customer does not exist'}, status=status.HTTP_404_NOT_FOUND) 
        serializer = CustomerSerializer(customer, data=request.data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 


class OrderViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать акции компаний
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Order.objects.all().order_by('pk')
    serializer_class = OrderSerializer  # Сериализатор для модели

    def list(self, request):
        queryset = Order.objects.all()
        serializer = OrderSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = Order.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = OrderSerializer(user)
        return Response(serializer.data)

    def update(self, request, pk=None):
        try: 
            order = Order.objects.get(pk=pk) 
        except Order.DoesNotExist: 
            return Response({'message': 'The order does not exist'}, status=status.HTTP_404_NOT_FOUND) 
        serializer = OrderSerializer(order, data=request.data) 
        if serializer.is_valid(): 
            serializer.save() 
            return Response(serializer.data) 
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 