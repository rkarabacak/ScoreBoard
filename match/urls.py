from django.contrib import admin
from django.conf import settings
from django.urls import path, re_path, include
from django.views.generic.base import TemplateView
from match.views import main_view, run_view, match_view, score_view, SuccessView, MatchFormCreateView, MatchDetailView

app_name = "match"

urlpatterns = [
    # re_path(r'main/^$', main_view, name='main'),
    path('main/', main_view, name="main"),   
    path('run/', run_view, name="run"),
    path('match/', MatchFormCreateView.as_view(), name="match"),
    path('matchs_detail/<int:pk>/', MatchDetailView.as_view(), name='detail'),
    path('score/', score_view, name="score"),
    path('success/', SuccessView.as_view(), name='success'),
]

if settings.DEBUG:
    from django.contrib.staticfiles.urls import staticfiles_urlpatterns
    urlpatterns += staticfiles_urlpatterns()