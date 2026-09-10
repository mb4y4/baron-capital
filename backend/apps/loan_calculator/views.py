from decimal import Decimal
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import LoanCalculatorInputSerializer, LoanCalculatorResultSerializer


def compute_monthly_installment(amount: Decimal, monthly_rate_percent: Decimal, term_months: int) -> Decimal:
    monthly_rate = monthly_rate_percent / Decimal(100)
    if monthly_rate == 0:
        return amount / term_months
    factor = (1 + monthly_rate) ** term_months
    return (amount * monthly_rate * factor) / (factor - 1)


class LoanCalculatorView(APIView):
    """
    POST /api/loan-calculator/calculate/
    Body: { "amount": 100000, "monthly_rate_percent": 14, "term_months": 12 }
    Rate is quoted MONTHLY (standard convention for Kenyan microfinance
    products), matching the frontend's instant calculator.
    """

    def post(self, request):
        serializer = LoanCalculatorInputSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data = serializer.validated_data

        monthly = compute_monthly_installment(
            data['amount'], data['monthly_rate_percent'], data['term_months']
        )
        total_repayment = monthly * data['term_months']
        total_interest = total_repayment - data['amount']

        result = LoanCalculatorResultSerializer(data={
            'monthly_installment': round(monthly, 2),
            'total_repayment': round(total_repayment, 2),
            'total_interest': round(total_interest, 2),
        })
        result.is_valid(raise_exception=True)
        return Response(result.validated_data, status=status.HTTP_200_OK)