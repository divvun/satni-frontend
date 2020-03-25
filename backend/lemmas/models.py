from djongo import models

class Lemma(models.Model):
    lemma = models.TextField()
    pos = models.TextField()
    language = models.TextField()
    multilingualconcepts = models.ManyToManyField('terms.MultiLingualConcept')

    def __str__(self):
        return "%s %s %s" % (self.lemma, self.pos, self.language)
