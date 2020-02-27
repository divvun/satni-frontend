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
    >>> from lemmas.models import Lemma
    >>> Lemma.objects.create(lemma='guolli', partOfSpeech='N', language='sme')
    >>> Lemma.objects.create(lemma='guolle', partOfSpeech='N', language='smj')
    >>> Lemma.objects.create(lemma='kyeli', partOfSpeech='N', language='smn')
    >>> Lemma.objects.create(lemma='kala', partOfSpeech='N', language='fin')
    >>> Lemma.objects.create(lemma='fisk', partOfSpeech='N', language='nob')
    >>> Lemma.objects.create(lemma='guelie', partOfSpeech='N', language='sma')

    python manage.py startapp terms

    python manage.py makemigrations
    python manage.py migrate

    python manage.py shell -> then

    >>> from lemmas.models import Lemma
    >>> from terms.models import Concept, MultiLingualConcept
    >>> Concept.objects.create(language='sme', definition='Ealli mii vuodjá')
    <Concept: Concept object (4)>
    >>> Concept.objects.create(language='sma')
    <Concept: Concept object (5)>
    >>> Concept.objects.create(language='smj')
    <Concept: Concept object (6)>

    >>> Lemma.objects.create(lemma='guolli', partOfSpeech='N', language='sme')
    <Lemma: Lemma object (15)>
    >>> c = Concept.objects.create(language='sma')
    >>> Lemma.objects.create(lemma='guelie', partOfSpeech='N', language='sma')
    <Lemma: Lemma object (16)>
    >>> c = Concept.objects.create(language='smj')
    >>> Lemma.objects.create(lemma='guolle', partOfSpeech='N', language='smj')
    <Lemma: Lemma object (17)>

    >>> Concept.objects.get(id=4).terms.add(Lemma.objects.get(id=15))
    >>> Concept.objects.get(id=5).terms.add(Lemma.objects.get(id=16))
    >>> Concept.objects.get(id=6).terms.add(Lemma.objects.get(id=17))

    >>> Concept.objects.get(id=7).terms.add(Lemma.objects.get(id=18))
    >>> Concept.objects.get(id=8).terms.add(Lemma.objects.get(id=19))
    >>> Concept.objects.get(id=9).terms.add(Lemma.objects.get(id=20))

    >>> m = MultiLingualConcept.objects.create(name='test')
    <MultiLingualConcept: MultiLingualConcept object (7)>

    >>> m = MultiLingualConcept.objects.create(name='Luonddudieđa ja matematihkka:liibma')
    <MultiLingualConcept: MultiLingualConcept object (8)>

    >>> m = MultiLingualConcept.get(id=7)
    >>> m.lemma.add(Lemma.objects.get(id=15))
    >>> m.lemma.add(Lemma.objects.get(id=16))
    >>> m.lemma.add(Lemma.objects.get(id=17))

    >>> m = MultiLingualConcept.objects.get(id=8)
    >>> m.lemma.add(Lemma.objects.get(id=18))
    >>> m.lemma.add(Lemma.objects.get(id=19))
    >>> m.lemma.add(Lemma.objects.get(id=20))

Queries

Find all lemmas

    {
        lemmas {
            id
            lemma
            partOfSpeech
            language
        }
    }

Search for a lemma starting with a string

    {
        lemmas(search: "gu") {
            id
            lemma
            partOfSpeech
            language
        }
    }

Find all MultiLingualConcepts

    {
        mconcepts {
            id
            name
            conceptSet {
                id
                definition
                explanation
                terms {
                    id
                    lemma
                    partOfSpeech
                    language
                }
            }
        }
    }

Get all MultiLingualConcepts where a particular lemma is found

    {
        lemmas (search: "lim") {
            id
            lemma
            partOfSpeech
            language
            lemmaconcepts {
                id
                name
                conceptSet {
                    id
                    definition
                    explanation
                    terms {
                        id
                        lemma
                        partOfSpeech
                        language
                    }
                }
            }
        }
    }
