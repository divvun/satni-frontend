from django.db import models
from lemmas.models import Lemma

class Concept(models.Model):
    language = models.TextField()
    definition = models.TextField(blank=True)
    explanation = models.TextField(blank=True)
    terms = models.ManyToManyField(Lemma)

class MultiLingualConcept(models.Model):
    concepts = models.ForeignKey(Concept, on_delete=models.CASCADE)
