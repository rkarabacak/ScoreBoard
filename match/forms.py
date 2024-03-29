from django import forms
from crispy_forms.helper import FormHelper
from crispy_forms.layout import Layout, Submit, Row, Column
from match.models import Matchs
import match.choices

class MatchForm(forms.ModelForm):
    
    # status = forms.TypedChoiceField(choices=match.choices.STATUS , label='Maç Durumu', widget=forms.Select(attrs={'class': 'iter'}) )
    status = forms.TypedChoiceField(choices=match.choices.STATUS , label='Maç Durumu')
    player1_name = forms.CharField(label='1. Oyuncunun Adı: ')
    player2_name = forms.CharField(label='2. Oyuncunun Adı: ')
    player1_id = forms.CharField(required=False, label='Oyuncu 1 ID: ')
    player2_id = forms.CharField(required=False, label='Oyuncu 2 ID: ')
    runs = forms.CharField(required=False, label='Istaka: ', widget=forms.Textarea(attrs={'rows':'5', 'cols':'20'}) )
    seconds = forms.CharField(required=False, label='Süreler: ', widget=forms.Textarea(attrs={'rows':'5', 'cols':'20'}) )
    active_run = forms.TypedChoiceField(choices=match.choices.ACTIVE_RUN , label='ACTIVE RUN (+/-):')
    allow_draw = forms.TypedChoiceField(choices=match.choices.ALLOW_DRAW , label='BERABERLİK: ')
    last_shoot = forms.TypedChoiceField(choices=match.choices.LAST_SHOOT , label='SON VURUŞ HAKKI:')
    score_limit = forms.TypedChoiceField(choices=match.choices.SCORE_LIMIT , label='SAYI SINIRI (+/-): ')    
    inning_limit = forms.TypedChoiceField(choices=match.choices.INNING_LIMIT , label='ISTAKA SINIRI (+/-): ')
    timeout_limit = forms.TypedChoiceField(choices=match.choices.TIMEOUT_LIMIT , label='TIMEOUT HAKKI (+/-): ')
    player1_timeout = forms.TypedChoiceField(choices=match.choices.TIMEOUT_LIMIT , label='Oyuncu 1 Timeout: ')
    player2_timeout = forms.TypedChoiceField(choices=match.choices.TIMEOUT_LIMIT , label='Oyuncu 2 Timeout: ')
    player1_timeavg = forms.DecimalField(label='Oyuncu 1 Timeavg: ')
    player2_timeavg = forms.DecimalField(label='Oyuncu 1 Timeavg: ')
    positions_switched = forms.TypedChoiceField(choices=match.choices.POSITIONS_SWITCHED , label='İSİM YERLERİNİ DEĞİŞTİR')
    color_switched = forms.TypedChoiceField(choices=match.choices.COLOR_SWITCHED , label='TOPLARI DEĞİŞTİR')
    theme_color = forms.TypedChoiceField(choices=match.choices.THEME_COLOR , label='TEMA:')
    time_force = forms.TypedChoiceField(choices=match.choices.TIMER_FORCE , label='TIMER: ')
    tour_name = forms.CharField(required=False, label='Turnuva Adı: ')
    group_name = forms.CharField(required=False, label='Grup Adı: ')


    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.helper = FormHelper()
        self.helper.layout = Layout(
            Row(
                Column('status', css_class='form-group col-md-2 mb-0'),                
                Column('player1_name', css_class='form-group col-md-2 mb-0'),                
                Column('player2_name', css_class='form-group col-md-2 mb-0'),                
                Column('player1_id', css_class='form-group col-md-2 mb-0'),                
                Column('player2_id', css_class='form-group col-md-2 mb-0'),                
                css_class='form-row'
            ),            
            Row(
                Column('runs', css_class='form-group col-md-2 mb-0'),
                Column('seconds', css_class='form-group col-md-2 mb-0'),
                Column('active_run', css_class='form-group col-md-2 mb-0'),
                Column('allow_draw', css_class='form-group col-md-2 mb-0'),
                Column('last_shoot', css_class='form-group col-md-2 mb-0'),
                css_class='form-row'
            ),
            Row(
                Column('score_limit', css_class='form-group col-md-2 mb-0'),
                Column('inning_limit', css_class='form-group col-md-2 mb-0'),
                Column('timeout_limit', css_class='form-group col-md-2 mb-0'),
                Column('player1_timeout', css_class='form-group col-md-2 mb-0'),
                Column('player2_timeout', css_class='form-group col-md-2 mb-0'),
                css_class='form-row'
            ),
             Row(
                Column('player1_timeavg', css_class='form-group col-md-2 mb-0'),
                Column('player2_timeavg', css_class='form-group col-md-2 mb-0'),
                Column('positions_switched', css_class='form-group col-md-2 mb-0'),
                Column('color_switched', css_class='form-group col-md-2 mb-0'),
                Column('theme_color', css_class='form-group col-md-2 mb-0'),
                css_class='form-row'
            ),
              Row(
                Column('time_force', css_class='form-group col-md-2 mb-0'),
                Column('tour_name', css_class='form-group col-md-2 mb-0'),
                Column('group_name', css_class='form-group col-md-2 mb-0'),               
                css_class='form-row'
            ),            
            Submit('submit', 'Kaydet')
        )

    class Meta:
        model = Matchs
        fields = [
            'status',
            'player1_name',
            'player2_name',
            'player1_id',
            'player2_id',
            'runs',
            'seconds',
            'active_run',
            'allow_draw',
            'last_shoot',
            'score_limit',
            'inning_limit',
            'timeout_limit',
            'player1_timeout',
            'player2_timeout',
            'player1_timeavg',
            'player2_timeavg',
            'positions_switched',
            'color_switched',
            'theme_color',
            'time_force',
            'tour_name',
            'group_name',   
        ]


