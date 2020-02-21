https://www.howtographql.com/graphql-python/1-getting-started/

cd satni-frontend
python3.6 -m venv venv
source venv/bin/activate

pip install django==2.1.4 graphene-django==2.2.0 django-filter==2.0.0 django-graphql-jwt==0.1.5
django-admin startproject backend
cd backend
python manage.py migrate
python manage.py runserver

python manage.py startapp lemmas

python manage.py makemigrations
python manage.py migrate

python manage.py shell -> then

```python
from lemmas.models import Lemma
Lemma.objects.create(lemma='guolli', partOfSpeech='N', language='sme')
Lemma.objects.create(lemma='guolle', partOfSpeech='N', language='smj')
Lemma.objects.create(lemma='kyeli', partOfSpeech='N', language='smn')
Lemma.objects.create(lemma='kala', partOfSpeech='N', language='fin')
Lemma.objects.create(lemma='fisk', partOfSpeech='N', language='nob')
Lemma.objects.create(lemma='guelie', partOfSpeech='N', language='sma')
```

python manage.py startapp terms

python manage.py makemigrations
python manage.py migrate

python manage.py shell -> then

```python
from lemmas.models import Lemma
from terms.models import Concept, MultiLingualConcept

Concept.objects.create(language='sme', definition='Ealli mii vuodjá')
c = Concept.objects.get(id=1)
c.terms.set([Lemma.objects.get(id=1)])
c.terms.set([Lemma.objects.get(id=1), Lemma.objects.get(id=2)])
c.terms.add(Lemma.objects.get(id=3))
c.terms.remove(Lemma.objects.get(id=2))
c.terms.remove(Lemma.objects.get(id=3))
Concept.objects.create(language='smj')
Concept.objects.create(language='sma')
Concept.objects.get(id=2).terms.add(Lemma.objects.get(id=2))
Concept.objects.get(id=3).terms.add(Lemma.objects.get(id=6))
MultiLingualConcept.objects.create(name='test', concepts=Concept.objects.get(id=1))
m = MultiLingualConcept.objects.get(id=1)
m.concept_set.add(oncept.objects.get(id=1))
m.concept_set.add(oncept.objects.get(id=2))
m.concept_set.add(oncept.objects.get(id=3))
m.concept_set.all()
    <QuerySet [<Concept: Concept object (1)>, <Concept: Concept object (2)>, <Concept: Concept object (3)>]>
```
