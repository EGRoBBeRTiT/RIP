import django.utils.timezone
from drf_spectacular.utils import extend_schema, inline_serializer, OpenApiExample
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAdminUser, IsAuthenticated
from rest_framework.response import Response
from .permissions import IsStaff, IsSuperUser
from app.serializers import *
from django.core.exceptions import ValidationError
from django.utils.timezone import now as date_now



class ProductViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать товары
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    # permission_classes = (IsAuthenticatedOrReadOnly,)
    queryset = Product.objects.all()
    serializer_class = ProductSerializer  # Сериализатор для модели
    filterset_fields = ('name', 'brand', 'price', 'strength',)
    search_fields = ['^name', '^brand', 'price']
    ordering_fields = ['name', 'brand']
    ordering = ['name']

    def get_permissions(self):
        if self.action in ['list', 'retrieve']:
            permission_classes = [IsAuthenticatedOrReadOnly]
        elif self.action in ['retrieve', 'update', 'partial_update', 'create']:
            permission_classes = [IsStaff]
        else:
            permission_classes = [IsSuperUser]
        return [permission() for permission in permission_classes]

    def list(self, request, *args, **kwargs):
        serializer = ProductSerializer(self.filter_queryset(self.queryset), many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, **kwargs):
        queryset = Product.objects.all()
        product = get_object_or_404(queryset, pk=pk)
        serializer = ProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def update(self, request, pk=None, **kwargs):
        try:
            product = Product.objects.get(pk=pk)
        except Product.DoesNotExist:
            return Response({'message': 'The product does not exist'}, status=status.HTTP_404_NOT_FOUND)
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None, **kwargs):
        try:
            Product.objects.filter(pk=pk).delete()
        except Exception:
            return Response(self.serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"status": "ok"}, status=status.HTTP_200_OK)


class OrderViewSet(viewsets.ModelViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать заказы пользователей
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Order.objects.all()
    serializer_class = OrderSerializer  # Сериализатор для модели
    filterset_fields = ('user__id',)
    ordering_fields = ['order_date']
    ordering = ['-order_date']

    def get_permissions(self):
        if self.action == 'get_orders' or self.action == 'create_new_order':
            permission_classes = [IsAuthenticated]
        elif self.action in ['change_status', 'list']:
            permission_classes = [IsStaff]
        else:
            permission_classes = [IsSuperUser]
        return [permission() for permission in permission_classes]

    @extend_schema(
        filters=True,
    )
    @action(detail=False, methods=['get'])
    def get_orders(self, request):
        request_user = request.user
        user = User.objects.get(pk=request_user.pk)
        try:
            orders = self.filter_queryset(self.queryset)
            orders = orders.filter(user__pk=user.pk)

            order_serializer = OrderSerializer(orders, many=True)
            return Response(order_serializer.data)
        except:
            return Response([], status=status.HTTP_404_NOT_FOUND)

    @extend_schema(request=None)
    @action(detail=False, methods=['post'])
    def create_new_order(self, request):
        request_user = request.user
        user = User.objects.get(pk=request_user.pk)

        cart = Cart.objects.get(user=user)
        order = Order(user=user, order_date=django.utils.timezone.now())
        order.save()
        products = cart.products.all()
        order.products.set(products)
        order.save()
        order_serialized = OrderSerializer(order)
        cart.products.clear()
        cart.save()
        return Response(order_serialized.data, status=status.HTTP_200_OK)

    @extend_schema(examples=[
        OpenApiExample(
            'Valid example 1',
            summary='application.json',
            value={
                'status': "string",
            },
            request_only=True,  # signal that example only applies to requests
            response_only=False,
            status_codes=[200]
        ),
        OpenApiExample(
            'Bad example 2',
            value={"Value 'string' is not a valid choice."},
            request_only=False,  # signal that example only applies to requests
            response_only=True,
            status_codes=[400]
        )
    ],
        responses={
            200: OrderSerializer(),
            400: inline_serializer(name="validation Error", fields={'status': serializers.CharField()})
        }
    )
    @action(detail=True, methods=['post'])
    def change_status(self, request, pk=None):

        try:
            order = Order.objects.get(pk=pk)
            prev_status = order.status
        except Order.DoesNotExist:
            return Response({'message': 'The order does not exist'}, status=status.HTTP_404_NOT_FOUND)
        data = request.data
        
        serializer = self.serializer_class(order)
        try:
            serializer.update(order, data)
        except ValidationError as e:
            return Response(e.messages, status=status.HTTP_400_BAD_REQUEST)

        ord_status = order.status
        if prev_status == Order.Status.ordered:
            if ord_status not in [Order.Status.approved, Order.Status.rejected]:
                return Response([f"Value '{ord_status}' is not a valid choice."], status=status.HTTP_400_BAD_REQUEST)
        elif prev_status == Order.Status.approved:
            if ord_status not in [Order.Status.picked_up]:
                return Response([f"Value '{ord_status}' is not a valid choice."], status=status.HTTP_400_BAD_REQUEST)
        elif prev_status == Order.Status.rejected:
            if ord_status not in [Order.Status.ordered]:
                return Response([f"Value '{ord_status}' is not a valid choice."], status=status.HTTP_400_BAD_REQUEST)
        if ord_status == Order.Status.approved:
            order.approval_date = date_now()
            order.save()

            print('approval_date',order.approval_date)
        elif ord_status == Order.Status.picked_up:
            order.pickup_date = date_now()
            order.save()
            print('pickup_date',order.pickup_date)
        elif ord_status == Order.Status.ordered:
            order.order_date = date_now()
            order.save()
            print('order_date',order.order_date)
            
        elif ord_status in [Order.Status.rejected]:
            user = request.user
            cart = user.get_cart()
            products = order.products.all()
            cart.products.set(products)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def list(self, request, **kwargs):
        queryset = Order.objects.all()
        serializer = OrderSerializer(self.filter_queryset(self.queryset), many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, **kwargs):
        order = get_object_or_404(self.filter_queryset(self.queryset), pk=pk)
        serializer = OrderSerializer(order)
        return Response(serializer.data)

    def update(self, request, pk=None, **kwargs):
        try:
            order = Order.objects.get(pk=pk)
        except Order.DoesNotExist:
            return Response({'message': 'The order does not exist'}, status=status.HTTP_404_NOT_FOUND)
        serializer = OrderSerializer(order, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def destroy(self, request, pk=None, **kwargs):
        try:
            Order.objects.filter(pk=pk).delete()
        except Exception:
            return Response(self.serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)
        return Response({"status": "ok"}, status=status.HTTP_200_OK)


class CartViewSet(viewsets.GenericViewSet):
    """
    API endpoint, который позволяет просматривать и редактировать корзину пользователя
    """
    # queryset всех пользователей для фильтрации по дате последнего изменения
    queryset = Cart.objects.all()
    serializer_class = CartSerializer  # Сериализатор для модели

    def get_permissions(self):
        if self.action == 'get_cart' or self.action == 'change_products':
            permission_classes = [IsAuthenticated]
        else:
            permission_classes = [IsSuperUser]
        return [permission() for permission in permission_classes]

    @action(detail=False, methods=['get'])
    def get_cart(self, request):
        request_user = request.user
        user = User.objects.get(pk=request_user.pk)
        try:
            cart = Cart.objects.get(user__pk=user.pk)
            cart_serializer = CartSerializer(cart)
            return Response(cart_serializer.data)
        except:
            return Response([], status=status.HTTP_404_NOT_FOUND)

    @action(detail=False, methods=['post'])
    def change_products(self, request):
        request_user = request.user
        user = User.objects.get(pk=request_user.pk)
        cart = user.get_cart()
        cart_serializer = CartSerializer(partial=True)
        new_cart = cart_serializer.update(cart, request.data)
        return Response(CartSerializer(new_cart).data, status=status.HTTP_200_OK)

    def list(self, request, **kwargs):
        queryset = Cart.objects.all()
        serializer = CartSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None, **kwargs):
        queryset = Cart.objects.all()
        cart = get_object_or_404(queryset, pk=pk)
        serializer = CartSerializer(cart)
        return Response(serializer.data)

    def update(self, request, pk=None, **kwargs):
        try:
            cart = Cart.objects.get(pk=pk)
        except Cart.DoesNotExist:
            return Response({'message': 'The order does not exist'}, status=status.HTTP_404_NOT_FOUND)
        serializer = CartSerializer(cart, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# def destroy(self, request, pk=None, **kwargs):
#     try:
#         Cart.objects.filter(pk=pk).delete()
#     except Exception:
#         return Response(self.serializer_class.errors, status=status.HTTP_400_BAD_REQUEST)
#     return Response({"status": "ok"}, status=status.HTTP_200_OK)
