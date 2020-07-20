from mongoengine import Document, EmbeddedDocument
from mongoengine.fields import (BooleanField, EmbeddedDocumentField, ListField,
                                ObjectIdField, ReferenceField, StringField)

from lemmas.models import Lemma


class ExampleGroup(EmbeddedDocument):
    example = StringField()
    translation = StringField()


class Restriction(EmbeddedDocument):
    restriction = StringField()
    attributes = StringField()


class TranslationGroup(EmbeddedDocument):
    ID = ObjectIdField()
    translationLemmas = ListField(ReferenceField(Lemma))
    restriction = EmbeddedDocumentField(Restriction)
    exampleGroups = ListField(EmbeddedDocumentField(ExampleGroup))


class DictEntry(Document):
    meta = {'collection': 'giellateknodicts'}
    ID = ObjectIdField()
    srcLang = StringField()
    targetLang = StringField()
    lookupLemmas = ListField(ReferenceField(Lemma))
    translationGroups = ListField(EmbeddedDocumentField(TranslationGroup))
