from django.db import models


class Lemma(models.Model):
    lemma = models.TextField()
    partOfSpeech = models.TextField()
    language = models.TextField()
