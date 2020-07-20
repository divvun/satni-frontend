from mongoengine import Document, EmbeddedDocument
from mongoengine.fields import (BooleanField, EmbeddedDocumentField, ListField,
                                ObjectIdField, ReferenceField, StringField)

from lemmas.models import Lemma


class Term(EmbeddedDocument):
    status = StringField(blank=True, null=True)
    sanctioned = BooleanField(default=False)
    note = StringField(blank=True, null=True)
    source = StringField(blank=True, null=True)
    expression = ReferenceField(Lemma)


class Concept(Document):
    meta = {'collection': 'terms'}
    dictName = StringField()
    name = StringField()
    language = StringField()
    definition = StringField(blank=True, null=True)
    explanation = StringField(blank=True, null=True)
    terms = ListField(EmbeddedDocumentField(Term))
    collections = ListField(StringField())

    def __str__(self):
        return '%s: %s' % (self.name, self.language)
