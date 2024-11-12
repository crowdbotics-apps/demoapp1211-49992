from django.conf import settings
from django.db import models


class Homepage(models.Model):
    "Generated Model"
    text = models.BigIntegerField()
    writingscript = models.BigIntegerField()


class Class(models.Model):
    "Generated Model"
    class1 = models.BigIntegerField()
    class2 = models.BigIntegerField()
