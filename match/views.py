from django.shortcuts import render, get_object_or_404, HttpResponseRedirect, redirect, Http404, reverse
from django.contrib import messages
# Create your views here.

def main_view(request):

    return render(request, 'macth/main.html', {})
    # return render(request, 'match/main.html', {})