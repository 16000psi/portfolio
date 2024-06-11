from rest_framework import viewsets

from .models import Article, TextBlock, VideoBlock
from .serializers import ArticleSerializer, TextBlockSerializer, VideoBlockSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer


class TextBlockViewSet(viewsets.ModelViewSet):
    queryset = TextBlock.objects.all()
    serializer_class = TextBlockSerializer


class VideoBlockViewSet(viewsets.ModelViewSet):
    queryset = VideoBlock.objects.all()
    serializer_class = VideoBlockSerializer
