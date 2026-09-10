from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/core/', include('apps.core_app.urls')),
    path('api/payments/', include('apps.payments.urls')),
    path('api/compliance/', include('apps.compliance.urls')),
    path('api/loan-calculator/', include('apps.loan_calculator.urls')),
]
