from mongoengine import Document
from mongoengine.fields import (
    StringField,
    ObjectIdField,
)


class Lemma(Document):
    meta = {'collection': 'lemmas'}
    ID = ObjectIdField()
    lemma = StringField()
    pos = StringField()
    language = StringField()

    def __str__(self):
        return "%s %s %s" % (self.lemma, self.pos, self.language)
