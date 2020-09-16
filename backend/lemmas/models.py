from mongoengine import Document
from mongoengine.fields import ObjectIdField, StringField


class Lemma(Document):
    meta = {'collection': 'lemmas'}
    ID = ObjectIdField()
    lemma = StringField()
    pos = StringField()
    language = StringField()
    dialect = StringField()
    country = StringField()  # two chars, iso something

    def __str__(self):
        return "%s %s %s" % (self.lemma, self.pos, self.language)
