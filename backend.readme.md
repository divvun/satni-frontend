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
    >>>
    >>> m = MultiLingualConcept.objects.create(name='test')
    >>> c = Concept.objects.create(language='sme', definition='Ealli mii vuodjá')
    >>> m.terms.add(Lemma.objects.get(id=9))
    >>> m.concept_set.add(c)

    >>> c = Concept.objects.create(language='sma')
    >>> m.concept_set.add(c)
    >>> m.terms.add(Lemma.objects.get(id=14))

    >>> c = Concept.objects.create(language='smj')
    >>> m.concept_set.add(c)
    >>> m.terms.add(Lemma.objects.get(id=10))

    >>> m.concept_set.all()
    <QuerySet [<Concept: Concept object (1)>, <Concept: Concept object (2)>, <Concept: Concept object (3)>]>

    >>> MultiLingualConcept.objects.all()
    <QuerySet [<MultiLingualConcept: MultiLingualConcept object (3)>, <MultiLingualConcept: MultiLingualConcept object (4)>, <MultiLingualConcept: MultiLingualConcept object (5)>, <MultiLingualConcept: MultiLingualConcept object (6)>]>

    >>> Concept.objects.all()
    <QuerySet [<Concept: Concept object (1)>, <Concept: Concept object (2)>, <Concept: Concept object (3)>]>

    >>> Lemma.objects.all()
    <QuerySet [<Lemma: Lemma object (9)>, <Lemma: Lemma object (10)>, <Lemma: Lemma object (11)>, <Lemma: Lemma object (12)>, <Lemma: Lemma object (13)>, <Lemma: Lemma object (14)>]>

    >>> m.terms.all()
    <QuerySet [<Lemma: Lemma object (9)>, <Lemma: Lemma object (10)>, <Lemma: Lemma object (14)>]>

    >>> Lemma.objects.get(id=10).multilingualconcept_set.all()
    <QuerySet [<MultiLingualConcept: MultiLingualConcept object (6)>]>

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
            concepts {
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
        mconcepts (search: "guolli") {
            id
            name
            concepts {
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
