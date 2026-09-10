from django.db import models


class KYCCheck(models.Model):
    """
    Loosely coupled to Core's LoanApplication by ID reference — see note in
    apps/payments/models.py for why this isn't a cross-service FK.
    """
    RESULT_CHOICES = [
        ('pending', 'Pending'),
        ('passed', 'Passed'),
        ('flagged', 'Flagged for Review'),
        ('failed', 'Failed'),
    ]

    application_id = models.PositiveIntegerField(help_text='References core_app.LoanApplication.id')
    id_document_verified = models.BooleanField(default=False)
    aml_screening_result = models.CharField(max_length=20, choices=RESULT_CHOICES, default='pending')
    notes = models.TextField(blank=True)
    checked_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f'KYC for application {self.application_id}: {self.aml_screening_result}'
