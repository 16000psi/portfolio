from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import ArticleViewSet, TextBlockViewSet, VideoBlockViewSet

router = DefaultRouter()
router.register(r"articles", ArticleViewSet)
router.register(r"textblocks", TextBlockViewSet)
router.register(r"videoblocks", VideoBlockViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
