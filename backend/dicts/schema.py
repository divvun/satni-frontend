import graphene
from graphene_mongo.fields import MongoengineConnectionField
from mongoengine.queryset.visitor import Q

from lemmas.models import Lemma

from .models import DictEntry
from .types import DictEntryType


class Query(graphene.ObjectType):
    dict_entry_list = graphene.List(DictEntryType,
                                    exact=graphene.String(),
                                    wanted=graphene.List(graphene.String),
                                    wanted_dicts=graphene.List(
                                        graphene.String))

    def resolve_dict_entry_list(self,
                                info,
                                wanted,
                                wanted_dicts,
                                exact=None,
                                **kwargs):
        print('dicts kwargs', wanted, sorted(wanted_dicts))
        filter = Q(lookupLemmas__in=Lemma.objects(lemma=exact))

        by_lemma = DictEntry.objects(filter)
        by_src_lang = [d for d in by_lemma if d.srcLang in wanted]
        by_target_lang = [d for d in by_src_lang if d.targetLang in wanted]
        by_dicts = [d for d in by_target_lang if d.dictName in wanted_dicts]

        return by_dicts
