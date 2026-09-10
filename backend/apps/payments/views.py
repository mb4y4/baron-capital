from rest_framework import generics
from .models import Transaction
from .serializers import TransactionSerializer


class TransactionListCreateView(generics.ListCreateAPIView):
    """
    GET  /api/payments/transactions/?application_id=1
    POST /api/payments/transactions/
    In production this is where you'd integrate a payment gateway
    (e.g. M-Pesa Daraja API, bank APIs) before marking a transaction complete.
    """
    serializer_class = TransactionSerializer

    def get_queryset(self):
        qs = Transaction.objects.all()
        application_id = self.request.query_params.get('application_id')
        if application_id:
            qs = qs.filter(application_id=application_id)
        return qs
