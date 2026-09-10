from rest_framework import serializers
from .models import KYCCheck


class KYCCheckSerializer(serializers.ModelSerializer):
    class Meta:
        model = KYCCheck
        fields = [
            'id', 'application_id', 'id_document_verified',
            'aml_screening_result', 'notes', 'checked_at',
        ]
        read_only_fields = ['checked_at']
