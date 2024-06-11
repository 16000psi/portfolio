from django import forms
from django.contrib import admin
from django.contrib.contenttypes.admin import GenericTabularInline

from .models import Article, TextBlock, VideoBlock


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


admin.site.register(Article, ArticleAdmin)
admin.site.register(TextBlock)
admin.site.register(VideoBlock)
