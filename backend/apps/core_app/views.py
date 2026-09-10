from rest_framework import generics
from .models import Branch, TeamMember, BlogPost, LoanApplication, ContactMessage
from .serializers import (
    BranchSerializer,
    TeamMemberSerializer,
    BlogPostSerializer,
    LoanApplicationSerializer,
    ContactMessageSerializer,
)


class BranchListView(generics.ListAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer


class TeamMemberListView(generics.ListAPIView):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer


class BlogPostListView(generics.ListAPIView):
    queryset = BlogPost.objects.all()
    serializer_class = BlogPostSerializer


class LoanApplicationCreateView(generics.CreateAPIView):
    queryset = LoanApplication.objects.all()
    serializer_class = LoanApplicationSerializer


class ContactMessageCreateView(generics.CreateAPIView):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
