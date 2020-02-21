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

from lemmas.models import Lemma
Lemma.objects.create(lemma='guolli', partOfSpeech='N', language='sme')
Lemma.objects.create(lemma='guolle', partOfSpeech='N', language='smj')
Lemma.objects.create(lemma='kyeli', partOfSpeech='N', language='smn')
Lemma.objects.create(lemma='kala', partOfSpeech='N', language='fin')
Lemma.objects.create(lemma='fisk', partOfSpeech='N', language='nob')
Lemma.objects.create(lemma='guelie', partOfSpeech='N', language='smj')
