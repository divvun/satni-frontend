from django.db import models

class Lemma(models.Model):
    lemma = models.TextField()
    pos = models.TextField()
    language = models.TextField()
    concept = models.ManyToManyField('terms.Concept', related_name='terms')
