"""Models for lemmas."""
from mongoengine import Document
from mongoengine.fields import StringField


class Lemma(Document):
    """A representation of lemmas."""
    meta = {'collection': 'lemmas'}
    lemma = StringField()
    presentation_lemma = StringField()
    pos = StringField()
    language = StringField()
    dialect = StringField()
    country = StringField()  # two chars, iso something

    def __str__(self):
        return "%s %s %s" % (self.lemma, self.pos, self.language)
