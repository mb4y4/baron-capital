from django.db import models


class Transaction(models.Model):
    """
    Loosely coupled to Core's LoanApplication by ID reference (not a DB
    foreign key) so this app can be split into its own service/database
    later without a cross-service FK constraint.
    """
    TYPE_CHOICES = [
        ('disbursement', 'Disbursement'),
        ('repayment', 'Repayment'),
    ]
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
    ]

    application_id = models.PositiveIntegerField(help_text='References core_app.LoanApplication.id')
    transaction_type = models.CharField(max_length=20, choices=TYPE_CHOICES)
    amount = models.DecimalField(max_digits=14, decimal_places=2)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    provider_reference = models.CharField(max_length=100, blank=True, help_text='e.g. M-Pesa/bank reference')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.transaction_type} KES {self.amount} — {self.status}'
