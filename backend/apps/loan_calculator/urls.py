from django.urls import path
from .views import LoanCalculatorView

urlpatterns = [
    path('calculate/', LoanCalculatorView.as_view(), name='loan-calculate'),
]
