import logging

import graphene
from graphene_mongo.fields import MongoengineConnectionField
from lemmas.models import Lemma
from mongoengine.queryset.visitor import Q

from .models import DictEntry
from .types import DictEntryType

LOGGER = logging.getLogger(__name__)


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
        LOGGER.info(f'dictlist: {exact} '
                    f'langs: {", ".join(sorted(wanted))} '
                    f'dicts: {", ".join(sorted(wanted_dicts))}')
        filter = Q(lookupLemmas__in=Lemma.objects(lemma=exact))

        by_lemma = DictEntry.objects(filter)
        by_src_lang = [d for d in by_lemma if d.srcLang in wanted]
        by_target_lang = [d for d in by_src_lang if d.targetLang in wanted]
        by_dicts = [d for d in by_target_lang if d.dictName in wanted_dicts]

        return by_dicts
