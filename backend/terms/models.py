from django.db import models


class MultiLingualConcept(models.Model):
    name = models.TextField(unique=True)
    lemma = models.ManyToManyField('lemmas.Lemma', related_name='lemmaconcepts')


class Concept(models.Model):
    language = models.TextField()
    definition = models.TextField(blank=True)
    explanation = models.TextField(blank=True)
    mconcept = models.ForeignKey(
        MultiLingualConcept, on_delete=models.CASCADE, blank=True, null=True)
