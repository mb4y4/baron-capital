from django.urls import path
from . import views

urlpatterns = [
    path('branches/', views.BranchListView.as_view(), name='branch-list'),
    path('team/', views.TeamMemberListView.as_view(), name='team-list'),
    path('posts/', views.BlogPostListView.as_view(), name='post-list'),
    path('applications/', views.LoanApplicationCreateView.as_view(), name='application-create'),
    path('contact/', views.ContactMessageCreateView.as_view(), name='contact-create'),
]
