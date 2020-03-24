from djongo import models


class MultiLingualConcept(models.Model):
    name = models.TextField()


class Term(models.Model):
    status = models.TextField(blank=True)
    sanctioned = models.BooleanField(default=False)
    note = models.TextField(blank=True)
    source = models.TextField(blank=True)

class Concept(models.Model):
    language = models.TextField()
    definition = models.TextField(blank=True)
    explanation = models.TextField(blank=True)
    turms = models.ForeignKey(
        Term, on_delete=models.CASCADE)


