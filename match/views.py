from django.shortcuts import render, get_object_or_404, HttpResponseRedirect, redirect, Http404, reverse
from django.contrib import messages
#// AJAX
from django import forms
from django.views.generic import View, CreateView, FormView, TemplateView, DetailView
from django.urls import reverse_lazy
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

from match.models import Matchs
from match.forms import MatchForm



class MatchDetailView(DetailView):
    model = Matchs

class MatchFormCreateView(CreateView):
    model= Matchs
    form_class = MatchForm
    template_name= 'match/match.html'
    
    

class SuccessView(TemplateView):
    template_name = 'match/success.html'

def main_view(request):
    matchs = Matchs.objects.all()
    context = {
        'matchs': matchs,
    } 
    return render(request, 'match/main.html', context)

def run_view(request):
       
    return render(request, 'match/run.html', {})

def match_view(request):
    forms = MatchForm(request.POST or None)    
    try:
        if forms.is_valid():
            forms.save()
                        
            return HttpResponseRedirect(reverse('match:score'))
        
        context = {
            'forms': forms,
        }
        return render(request, 'match/match.html', context)
    except:
        messages.warning(request, "Kayıt Başarısız")


def score_view(request):
    scores = Matchs.objects.all()
    context = {
        'scores': scores,
    }

    return render(request, 'match/score.html', context)

