from mongoengine import Document
from mongoengine.fields import ObjectIdField, StringField, ListField

class Stem(Document):
    meta = {'collection': 'stems'}
    stem = StringField()
    srclangs = ListField(StringField())
    targetlangs = ListField(StringField())
