from django.urls import include, path
from rest_framework.routers import DefaultRouter

from .views import (
    ArticleViewSet,
    ProjectViewSet,
    TextBlockViewSet,
    VideoBlockViewSet,
    WorkExperienceViewSet,
)

router = DefaultRouter()
router.register(r"articles", ArticleViewSet)
router.register(r"textblocks", TextBlockViewSet)
router.register(r"videoblocks", VideoBlockViewSet)
router.register(r"work-experiences", WorkExperienceViewSet)
router.register(r"projects", ProjectViewSet)

urlpatterns = [
    path("", include(router.urls)),
]
