from rest_framework import viewsets

from .models import Article, TextBlock, VideoBlock, WorkExperience
from .serializers import (
    ArticleSerializer,
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
