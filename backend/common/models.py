from django.contrib.contenttypes.fields import GenericForeignKey
from django.contrib.contenttypes.models import ContentType
from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class ContentBlock(models.Model):
    article = models.ForeignKey(
        "Article", related_name="content_blocks", on_delete=models.CASCADE
    )
    order = models.PositiveIntegerField()

    content_type = models.ForeignKey(ContentType, on_delete=models.CASCADE)
    object_id = models.PositiveIntegerField()
    content_object = GenericForeignKey("content_type", "object_id")

    class Meta:
        ordering = ["order"]
        constraints = [
            models.UniqueConstraint(
                fields=["article", "order"], name="unique_article_order"
            )
        ]


class TextBlock(ContentBlock):
    content = models.TextField()


class VideoBlock(ContentBlock):
    video_url = models.URLField()
    caption = models.CharField(max_length=255, blank=True, null=True)


class WorkExperience(models.Model):
    when = models.TextField()
    title = models.TextField()
    description = models.TextField()
    order = models.PositiveIntegerField(unique=True)
    skills = models.TextField(blank=True)
    link = models.URLField(max_length=200, blank=True)
    hidden = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title}"

    class Meta:
        ordering = ["order"]


class Project(models.Model):
    title = models.TextField()
    description = models.TextField()
    order = models.PositiveIntegerField(unique=True)
    skills = models.TextField(blank=True)
    repository = models.URLField(max_length=200, blank=True)
    image = models.URLField(max_length=200, blank=True)
    hidden = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title}"

    class Meta:
        ordering = ["order"]
