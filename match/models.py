from django.db import models
from django.utils.translation import ugettext_lazy as _
from django.shortcuts import reverse
from decimal import Decimal



class Matchs(models.Model):
    
    status = models.SmallIntegerField(_("Status"))
    player1_name = models.CharField(_("Player 1 Name"), max_length=50)
    player2_name = models.CharField(_("Player 2 Name"), max_length=50)
    player1_id = models.CharField(_("Player 1 ID"), max_length=16, blank=True)
    player2_id = models.CharField(_("Player 2 ID"), max_length=16, blank=True)
    runs = models.TextField(_("Innings"), blank=True)
    seconds = models.TextField(_("Seconds"), blank=True)
    active_run  = models.IntegerField(_("Active Run"))
    allow_draw = models.SmallIntegerField(_("Allow Drawn"))
    last_shoot = models.SmallIntegerField(_("Last Shoot"))
    score_limit = models.SmallIntegerField(_("Score Limit"))
    inning_limit = models.SmallIntegerField(_("Inning Limit"))
    timeout_limit = models.SmallIntegerField(_("Timeout Limit"))
    player1_timeout = models.SmallIntegerField(_("Player 1 Timeout"))
    player2_timeout = models.SmallIntegerField(_("Player 2 Timeout"))
    player1_timeavg = models.DecimalField(_("Player 1 Timeavg"), max_digits=6, decimal_places=3, default=Decimal('0.000'))
    player2_timeavg = models.DecimalField(_("Player 2 Timeavg"), max_digits=6, decimal_places=3, default=Decimal('0.000'))
    positions_switched = models.SmallIntegerField(_("Positions Switched"))
    color_switched = models.SmallIntegerField(_("Color Switched"))
    theme_color = models.CharField(_("Theme Color"), max_length=12)
    time_force = models.SmallIntegerField(_("Time Force"))
    tour_name = models.CharField(_("Tour Name"), max_length=100, blank=True)
    group_name = models.CharField(_("Group Name"), max_length=100, blank=True)
    

    class Meta:
        verbose_name = _("Match")
        verbose_name_plural = _("s")

    def __str__(self):
        return '%s Numaralı Maç' % (str(self.pk))

    def get_absolute_url(self):
        return reverse('match:detail', args=[self.pk])