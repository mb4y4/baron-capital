from django.contrib import admin
from .models import KYCCheck


@admin.register(KYCCheck)
class KYCCheckAdmin(admin.ModelAdmin):
    list_display = ['application_id', 'id_document_verified', 'aml_screening_result', 'checked_at']
    list_filter = ['aml_screening_result']
