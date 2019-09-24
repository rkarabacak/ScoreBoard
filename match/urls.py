from django.contrib import admin
from django.urls import path, re_path
from match.views import *

app_name = "match"

urlpatterns = [
    # re_path(r'main/^$', main_view, name='main'),
    path('main/', main_view, name="main"),
]
