from mongoengine import Document, EmbeddedDocument
from mongoengine.fields import (BooleanField, EmbeddedDocumentField, ListField,
                                ObjectIdField, ReferenceField, StringField)

from lemmas.models import Lemma


class ExampleGroup(EmbeddedDocument):
    example = StringField()
    translation = StringField()


class Reference(EmbeddedDocument):
    reference = StringField()
    comment = StringField()


class TranslationGroup(EmbeddedDocument):
    ID = ObjectIdField()
    translationLemmas = ListField(ReferenceField(Lemma))
    # re = EmbeddedDocumentField(Reference)
    # exampleGroups = ListField(EmbeddedDocumentField(ExampleGroup))


class MeaningGroup(EmbeddedDocument):
    ID = ObjectIdField()
    translationsGroups = ListField(EmbeddedDocumentField(TranslationGroup))


class DictEntry(Document):
    meta = {'collection': 'giellateknodicts'}
    ID = ObjectIdField()
    srcLang = StringField()
    targetLang = StringField()
    lookupLemma = ReferenceField(Lemma)
    meaningGroups = ListField(EmbeddedDocumentField(MeaningGroup))
