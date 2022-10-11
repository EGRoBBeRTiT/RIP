
from django.contrib import admin
from django.urls import include, path
from rest_framework import routers
from main import views
from main.viewSets import CoffeeViewSet, CustomerViewSet, OrderViewSet



router = routers.DefaultRouter()
router.register(r'coffees', CoffeeViewSet)
router.register(r'customer', CustomerViewSet)
router.register(r'order', OrderViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('hello/', views.hello),
    path('coffeeList', views.GetOrders),
    path('order/<int:id>/', views.GetOrder, name='coffee_url'),
    path('', include(router.urls)),
]
