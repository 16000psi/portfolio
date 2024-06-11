import os

from django.conf import settings
from django.http import HttpResponse


def index(request):
    with open(os.path.join(settings.WHITENOISE_ROOT, "index.html")) as f:
        return HttpResponse(f.read())
