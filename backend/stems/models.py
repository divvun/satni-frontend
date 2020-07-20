from mongoengine import Document
from mongoengine.fields import ListField, ObjectIdField, StringField


class Stem(Document):
    meta = {'collection': 'stems'}
    stem = StringField()
    srclangs = ListField(StringField())
    targetlangs = ListField(StringField())
    dicts = ListField(StringField())
