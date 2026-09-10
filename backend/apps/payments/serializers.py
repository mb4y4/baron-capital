from rest_framework import serializers
from .models import Transaction


class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = [
            'id', 'application_id', 'transaction_type', 'amount',
            'status', 'provider_reference', 'created_at',
        ]
        read_only_fields = ['status', 'created_at']
