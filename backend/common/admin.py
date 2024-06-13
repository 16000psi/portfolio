from django import forms
from django.contrib import admin
from django.contrib.contenttypes.admin import GenericTabularInline
from django.db import models
from django.forms import Textarea, TextInput

from .models import Article, Project, TextBlock, VideoBlock, WorkExperience


class TextBlockInlineForm(forms.ModelForm):
    class Meta:
        model = TextBlock
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["article"].required = False
        self.fields["article"].widget = forms.HiddenInput()


class TextBlockInline(GenericTabularInline):
    model = TextBlock
    form = TextBlockInlineForm
    extra = 1


class VideoBlockInlineForm(forms.ModelForm):
    class Meta:
        model = VideoBlock
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields["article"].required = False
        self.fields["article"].widget = forms.HiddenInput()


class VideoBlockInline(GenericTabularInline):
    model = VideoBlock
    form = VideoBlockInlineForm
    extra = 1


class ArticleAdmin(admin.ModelAdmin):
    inlines = [TextBlockInline, VideoBlockInline]

    def save_model(self, request, obj, form, change):
        obj.save()

    def save_formset(self, request, form, formset, change):
        instances = formset.save(commit=False)
        for instance in instances:
            instance.article = form.instance
            instance.save()
        formset.save_m2m()


class WorkExperienceAdmin(admin.ModelAdmin):
    list_display = ("order", "title", "when", "description", "link")
    list_display_links = ("title",)  # Set the 'title' field as the clickable link
    list_editable = (
        "order",
        "when",
        "description",
        "link",
    )  # Editable fields excluding 'title'
    ordering = ("order",)

    formfield_overrides = {
        models.TextField: {"widget": Textarea(attrs={"rows": 1, "cols": 40})},
    }

    def formfield_for_dbfield(self, db_field, **kwargs):
        if db_field.name in ["when", "title", "order"]:
            kwargs["widget"] = TextInput(attrs={"size": "40"})
        if db_field.name == "skills":
            kwargs["help_text"] = "Skills as a comma separated list"
        return super().formfield_for_dbfield(db_field, **kwargs)


class ProjectAdmin(admin.ModelAdmin):
    list_display = ("order", "title", "description", "repository", "image")
    list_display_links = ("title",)  # Set the 'title' field as the clickable link
    list_editable = (
        "order",
        "description",
        "repository",
        "image",
    )  # Editable fields excluding 'title'
    ordering = ("order",)

    formfield_overrides = {
        models.TextField: {"widget": Textarea(attrs={"rows": 1, "cols": 40})},
    }

    def formfield_for_dbfield(self, db_field, **kwargs):
        if db_field.name in ["title", "order"]:
            kwargs["widget"] = TextInput(attrs={"size": "40"})
        if db_field.name == "skills":
            kwargs["help_text"] = "Skills as a comma separated list"
        return super().formfield_for_dbfield(db_field, **kwargs)


admin.site.register(Project, ProjectAdmin)
admin.site.register(Article, ArticleAdmin)
admin.site.register(TextBlock)
admin.site.register(VideoBlock)
admin.site.register(WorkExperience, WorkExperienceAdmin)
