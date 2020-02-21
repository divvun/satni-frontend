from django.db import models
from lemmas.models import Lemma

class MultiLingualConcept(models.Model):
    name = models.TextField()


class Concept(models.Model):
    language = models.TextField()
    definition = models.TextField(blank=True)
    explanation = models.TextField(blank=True)
    terms = models.ManyToManyField(Lemma)
    mconcept = models.ForeignKey(MultiLingualConcept, on_delete=models.CASCADE)
