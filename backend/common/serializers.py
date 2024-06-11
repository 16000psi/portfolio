from rest_framework import serializers

from .models import Article, ContentBlock, TextBlock, VideoBlock


class TextBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = TextBlock
        fields = "__all__"


class VideoBlockSerializer(serializers.ModelSerializer):
    class Meta:
        model = VideoBlock
        fields = "__all__"


class ContentBlockSerializer(serializers.ModelSerializer):
    content_object = serializers.SerializerMethodField()

    class Meta:
        model = ContentBlock
        fields = ["id", "order", "content_type", "content_object"]

    def get_content_object(self, obj):
        if isinstance(obj.content_object, TextBlock):
            return TextBlockSerializer(obj.content_object).data
        elif isinstance(obj.content_object, VideoBlock):
            return VideoBlockSerializer(obj.content_object).data
        return None


class ArticleSerializer(serializers.ModelSerializer):
    content_blocks = ContentBlockSerializer(many=True)

    class Meta:
        model = Article
        fields = "__all__"
