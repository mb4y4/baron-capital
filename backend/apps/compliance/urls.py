from django.urls import path
from .views import KYCCheckListCreateView, KYCCheckDetailView

urlpatterns = [
    path('kyc-checks/', KYCCheckListCreateView.as_view(), name='kyc-list-create'),
    path('kyc-checks/<int:pk>/', KYCCheckDetailView.as_view(), name='kyc-detail'),
]
