from django.db import models
from lemmas.models import Lemma

class MultiLingualConcept(models.Model):
    name = models.TextField()
    terms = models.ManyToManyField(Lemma)


class Concept(models.Model):
    language = models.TextField()
    definition = models.TextField(blank=True)
    explanation = models.TextField(blank=True)
    mconcept = models.ForeignKey(MultiLingualConcept, on_delete=models.CASCADE)
