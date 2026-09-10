from rest_framework import generics
from .models import KYCCheck
from .serializers import KYCCheckSerializer


class KYCCheckListCreateView(generics.ListCreateAPIView):
    """
    GET  /api/compliance/kyc-checks/?application_id=1
    POST /api/compliance/kyc-checks/
    In production this is where you'd integrate ID verification and AML
    screening providers before a loan application can move to 'approved'.
    """
    serializer_class = KYCCheckSerializer

    def get_queryset(self):
        qs = KYCCheck.objects.all()
        application_id = self.request.query_params.get('application_id')
        if application_id:
            qs = qs.filter(application_id=application_id)
        return qs


class KYCCheckDetailView(generics.RetrieveUpdateAPIView):
    queryset = KYCCheck.objects.all()
    serializer_class = KYCCheckSerializer
