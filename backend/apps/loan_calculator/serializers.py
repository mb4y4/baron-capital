from rest_framework import serializers


class LoanCalculatorInputSerializer(serializers.Serializer):
    amount = serializers.DecimalField(max_digits=14, decimal_places=2, min_value=1000)
    monthly_rate_percent = serializers.DecimalField(max_digits=5, decimal_places=2, min_value=0)
    term_months = serializers.IntegerField(min_value=1, max_value=360)


class LoanCalculatorResultSerializer(serializers.Serializer):
    monthly_installment = serializers.DecimalField(max_digits=14, decimal_places=2)
    total_repayment = serializers.DecimalField(max_digits=14, decimal_places=2)
    total_interest = serializers.DecimalField(max_digits=14, decimal_places=2)
