https://www.howtographql.com/graphql-python/1-getting-started/

Initial steps

```
    cd satni-frontend
    python3.6 -m venv venv
    source venv/bin/activate

    pip install django>=2.2 graphene-django>=2.10 django-filter==2.0.0 django-graphql-jwt==0.1.5
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

Query for lemmas starting with "ar"

```
{
  lemmaList(search: "ar") {
    id
    lemma
    pos
    language
  }
}
```

Result

```
{
  "data": {
    "lemmas": {
      "edges": [
        {
          "node": {
            "lemma": "arpeggio",
            "pos": "N",
            "language": "fin"
          }
        },
        {
          "node": {
            "lemma": "arpeggio",
            "pos": "N",
            "language": "sms"
          }
        },
        {
          "node": {
            "lemma": "artikulaatio",
            "pos": "N",
            "language": "fin"
          }
        },
        {
          "node": {
            "lemma": "artikulaatio",
            "pos": "N",
            "language": "sms"
          }
        }
      ]
    }
  }
}
```

Query for multilingualconcepts that has exactly "arpeggio"

```
{
  multilingualconceptList (exact: "arpeggio") {
    id
    name
    concepts {
      edges {
        node {
          definition
          terms {
            edges {
              node {
                sanctioned
                source
                status
                note
                expression {
                  lemma
                  pos
                }
              }
            }
          }
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
    "multilingualconceptList": [
      {
        "id": "TXVsdGlMaW5ndWFsQ29uY2VwdFR5cGU6NWU4MGE5NmZmYjg2ODFmOWVkNWY4MjZh",
        "name": "Beaivválaš giella:Musikksannõs 12",
        "concepts": {
          "edges": [
            {
              "node": {
                "definition": "sointu jonka sävelet soitetaan nopeasti peräkkäin, murrettu sointu (Kielitoimiston sanakirja)",
                "terms": {
                  "edges": [
                    {
                      "node": {
                        "sanctioned": true,
                        "source": null,
                        "status": null,
                        "note": "(murtosointu)",
                        "expression": {
                          "lemma": "arpeggio",
                          "pos": "N"
                        }
                      }
                    }
                  ]
                }
              }
            },
            {
              "node": {
                "definition": null,
                "terms": {
                  "edges": [
                    {
                      "node": {
                        "sanctioned": true,
                        "source": null,
                        "status": null,
                        "note": "(=, -ooʹje ~ =, arpeggiost)",
                        "expression": {
                          "lemma": "arpeggio",
                          "pos": "N"
                        }
                      }
                    }
                  ]
                }
              }
            }
          ]
        }
      }
    ]
  }
}
```
