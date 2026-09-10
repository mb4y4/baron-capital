from django.contrib import admin
from .models import Branch, TeamMember, BlogPost, LoanApplication, ContactMessage

admin.site.register(Branch)
admin.site.register(TeamMember)
admin.site.register(BlogPost)


@admin.register(LoanApplication)
class LoanApplicationAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'product_slug', 'amount_requested', 'status', 'created_at']
    list_filter = ['status', 'product_slug']
    search_fields = ['full_name', 'email', 'phone']


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'created_at']
