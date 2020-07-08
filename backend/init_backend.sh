#!/bin/bash

mongo localhost:27017/satnibackend drop_satnibackend.js
rm -v db.sqlite3
for i in lemmas terms
  do rm -v $i/migrations/0*
done
python manage.py makemigrations
python manage.py migrate
python manage.py runscript from_dump
