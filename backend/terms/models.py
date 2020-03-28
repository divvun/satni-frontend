from mongoengine import Document, EmbeddedDocument
from mongoengine.fields import (
    BooleanField,
    EmbeddedDocumentField,
    ListField,
    ObjectIdField,
    ReferenceField,
    StringField,
)

from lemmas.models import Lemma


class Term(EmbeddedDocument):
    # meta = {'collection': 'terms'}
    ID = ObjectIdField()
    status = StringField(blank=True, null=True)
    sanctioned = BooleanField(default=False)
    note = StringField(blank=True, null=True)
    source = StringField(blank=True, null=True)
    expression = ReferenceField(Lemma)

class Concept(EmbeddedDocument):
    # meta = {'collection': 'concepts'}
    ID = ObjectIdField()
    language = StringField()
    definition = StringField(blank=True, null=True)
    explanation = StringField(blank=True, null=True)
    terms = ListField(EmbeddedDocumentField(Term))


class MultiLingualConcept(Document):
    meta = {'collection': 'multilingualconcepts'}
    ID = ObjectIdField()
    name = StringField()
    concepts = ListField(EmbeddedDocumentField(Concept))

    def __str__(self):
        return '%s' % (self.name)
