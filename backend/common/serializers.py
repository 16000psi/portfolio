from rest_framework import serializers

from .models import Article, ContentBlock, TextBlock, VideoBlock, WorkExperience, Project


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


class WorkExperienceSerializer(serializers.ModelSerializer):
    skills = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = WorkExperience
        fields = ["id", "when", "title", "description", "order", "skills", "link"]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        skills = representation.get("skills")
        if skills:
            representation["skills"] = skills.split(",")
        else:
            representation["skills"] = []
        return representation

    def to_internal_value(self, data):
        skills = data.get("skills", "")
        if isinstance(skills, list):
            data["skills"] = ",".join(skills)
        return super().to_internal_value(data)


class ProjectSerializer(serializers.ModelSerializer):
    skills = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "description",
            "order",
            "skills",
            "repository",
            "image",
        ]

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        skills = representation.get("skills")
        if skills:
            representation["skills"] = skills.split(",")
        else:
            representation["skills"] = []
        return representation

    def to_internal_value(self, data):
        skills = data.get("skills", "")
        if isinstance(skills, list):
            data["skills"] = ",".join(skills)
        return super().to_internal_value(data)
