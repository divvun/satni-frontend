from djongo import models


class MultiLingualConcept(models.Model):
    name = models.TextField()

    def __str__(self):
        return '%s' % (self.name)


class Concept(models.Model):
    language = models.TextField()
    definition = models.TextField(blank=True, null=True)
    explanation = models.TextField(blank=True, null=True)
    multilingualconcepts = models.ForeignKey(MultiLingualConcept, on_delete=models.CASCADE)


class Term(models.Model):
    status = models.TextField(blank=True, null=True)
    sanctioned = models.BooleanField(default=False)
    note = models.TextField(blank=True, null=True)
    source = models.TextField(blank=True, null=True)
    concept = models.ForeignKey(Concept, on_delete=models.CASCADE)
    expression = models.ForeignKey('lemmas.Lemma', on_delete=models.CASCADE)
