from django.contrib.auth.models import AbstractUser
from django.core.urlresolvers import reverse
from django.db import models
from django.utils import timezone
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _


@python_2_unicode_compatible
class User(AbstractUser):

    # First Name and Last Name do not cover name patterns
    # around the globe.
    name = models.CharField(_('Name of User'), blank=True, max_length=255)

    weight = models.DecimalField(_('Weight'), decimal_places=4, max_digits=100, default=0)
    height = models.DecimalField(_('Height'), decimal_places=4, max_digits=100, default=0)
    sex = models.CharField(max_length=1, choices = (
            (0, 'Male'),
            (1, 'Female')
        ),
        default = 0)
    birth_date = models.DateField(_('Birth date'), default=timezone.now)

    def __str__(self):
        return self.username

    def get_absolute_url(self):
        return reverse('users:detail', kwargs={'username': self.username})
