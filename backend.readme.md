https://www.howtographql.com/graphql-python/1-getting-started/

Initial steps

```
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
```

Import dump:

Remove old content

```
mongo
> use satnibackend
switched to db satnibackend
> db.dropDatabase()
{ "dropped" : "satnibackend", "ok" : 1 }
```

Add content from termwiki

```
for i in lemmas terms
  do rm -v $i/migrations/0*
done
python manage.py makemigrations
python manage.py migrate
python manage.py runscript from_dump
```

Query for lemma, then all MultiLingualConcepts that has this lemma

```

python manage.py shell

  >>> from lemmas.models import Lemma
  >>> for l in Lemma.objects.filter(lemma__startswith='a'):
  ...     for m in l.multilingualconcept.all():
  ...             for c in m.concept_set.all():
  ...                     for t in c.term_set.all():
  ...                             t.sanctioned
  ...                             t.lemma
  ...
```

Query for lemmas starting with "a"

```
{
  lemmas(search: "a") {
    id
    lemma
  }
}
```

Result

```
{
  "data": {
    "lemmas": [
      {
        "id": "4",
        "lemma": "alttoviulu"
      },
      {
        "id": "5",
        "lemma": "alttoviulu"
      },
      {
        "id": "36",
        "lemma": "aluke"
      },
      {
        "id": "37",
        "lemma": "aalǥõs"
      },
      {
        "id": "63",
        "lemma": "arpeggio"
      },
      {
        "id": "64",
        "lemma": "arpeggio"
      },
      {
        "id": "85",
        "lemma": "artikulaatio"
      },
      {
        "id": "86",
        "lemma": "artikulaatio"
      }
    ]
  }
}
```

Query for multilingualconcepts that has exactly "balladi"

```
{
  elemmas(exact: "balladi") {
    id
    lemma
    language
    pos
    multilingualconcept {
      id
      name
      conceptSet {
        id
        definition
        explanation
        termSet {
          id
          lemma {
            id
            language
            lemma
            pos
          }
          sanctioned
          note
          status
          source
        }
      }
    }
  }
}
```

Result

```
{
  "data": {
    "elemmas": [
      {
        "id": "152",
        "lemma": "balladi",
        "language": "fin",
        "pos": "N",
        "multilingualconcept": [
          {
            "id": "68",
            "name": "Beaivválaš giella:Musikksannõs 16",
            "conceptSet": [
              {
                "id": "149",
                "definition": "",
                "explanation": "",
                "termSet": [
                  {
                    "id": "156",
                    "lemma": {
                      "id": "152",
                      "language": "fin",
                      "lemma": "balladi",
                      "pos": "N"
                    },
                    "sanctioned": true,
                    "note": null,
                    "status": null,
                    "source": null
                  }
                ]
              },
              {
                "id": "150",
                "definition": "",
                "explanation": "",
                "termSet": [
                  {
                    "id": "157",
                    "lemma": {
                      "id": "153",
                      "language": "sms",
                      "lemma": "ballaad",
                      "pos": "N"
                    },
                    "sanctioned": true,
                    "note": "(=, -aaʹde)",
                    "status": null,
                    "source": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
}
```
