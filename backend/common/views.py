from rest_framework import viewsets

from .models import Article, Project, TextBlock, VideoBlock, WorkExperience
from .serializers import (
    ArticleSerializer,
    ProjectSerializer,
    TextBlockSerializer,
    VideoBlockSerializer,
    WorkExperienceSerializer,
)


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class TextBlockViewSet(viewsets.ModelViewSet):
    queryset = TextBlock.objects.all()
    serializer_class = TextBlockSerializer


class VideoBlockViewSet(viewsets.ModelViewSet):
    queryset = VideoBlock.objects.all()
    serializer_class = VideoBlockSerializer


class WorkExperienceViewSet(viewsets.ModelViewSet):
    queryset = WorkExperience.objects.all()
    serializer_class = WorkExperienceSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
