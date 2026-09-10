from django.db import models


class Branch(models.Model):
    name = models.CharField(max_length=120)
    address = models.CharField(max_length=255)
    is_hq = models.BooleanField(default=False)

    def __str__(self):
        return self.name


class TeamMember(models.Model):
    name = models.CharField(max_length=120)
    role = models.CharField(max_length=120)
    bio = models.TextField(blank=True)
    photo = models.ImageField(upload_to='team/', blank=True, null=True)

    def __str__(self):
        return f'{self.name} ({self.role})'


class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    excerpt = models.CharField(max_length=300)
    body = models.TextField()
    published_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-published_at']

    def __str__(self):
        return self.title


class LoanApplication(models.Model):
    PRODUCT_CHOICES = [
        ('logbook-loan', 'Logbook Loan'),
        ('title-deed-loan', 'Title Deed Loan'),
        ('asset-finance', 'Asset Finance'),
        ('trade-finance', 'Trade Finance (Bid Bonds)'),
        ('cargo-clearance-finance', 'Cargo Clearance Finance'),
    ]
    STATUS_CHOICES = [
        ('received', 'Received'),
        ('under_review', 'Under Review'),
        ('compliance_check', 'Compliance Check'),
        ('approved', 'Approved'),
        ('declined', 'Declined'),
    ]

    full_name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30)
    product_slug = models.CharField(max_length=50, choices=PRODUCT_CHOICES)
    amount_requested = models.DecimalField(max_digits=14, decimal_places=2)
    message = models.TextField(blank=True)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='received')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.full_name} — {self.product_slug} ({self.status})'


class ContactMessage(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField()
    phone = models.CharField(max_length=30, blank=True)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.name} <{self.email}>'
