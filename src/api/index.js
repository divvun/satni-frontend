import fetch from 'cross-fetch';

const korpInfo = {
  sma: {
    start_query: 'http://gtweb.uit.no/ws/gt_korp/?command=query&corpus=',
    corpora:
      'SMA_ADMIN_20181106,SMA_BIBLE_20181106,SMA_FACTA_20181106,SMA_FICTI_20181106,SMA_LAWS_20181106,SMA_NEWS_20181106,SMA_SCIENCE_20181106',
  },
  sme: {
    start_query: 'http://gtweb.uit.no/ws/gt_korp/?command=query&corpus=',
    corpora:
      'SME_ADMIN_20181106,SME_ASSU_20181106,SME_AVVIR_20181106,SME_BIBLE_20181106,SME_BLOGS_20181106,SME_FACTA_20181106,SME_FICTI_20181106,SME_LAWS_20181106,SME_MINAIGI_20181106,SME_MUITALUS_20170319,SME_NRK_20181106,SME_SCIENCE_20181106',
  },
  smj: {
    start_query: 'http://gtweb.uit.no/ws/gt_korp/?command=query&corpus=',
    corpora:
      'SMJ_ADMIN_20181106%2CSMJ_BIBLE_20181106%2CSMJ_FACTA_20181106%2CSMJ_FICTI_20181106%2CSMJ_LAWS_20181106%2CSMJ_NEWS_20181106%2CSMJ_SCIENCE_20181106',
  },
  smn: {
    start_query: 'http://gtweb.uit.no/ws/gt_korp/?command=query&corpus=',
    corpora:
      'SMN_ADMIN_20181106,SMN_BIBLE_20181106,SMN_FACTA_20181106,SMN_NEWS_20181106,SMN_SCIENCE_20181106',
  },
  sms: {
    start_query: 'http://gtweb.uit.no/ws/gt_korp/?command=query&corpus=',
    corpora:
      'SMS_ADMIN_20181106,SMS_FACTA_20181106,SMS_FICTI_20181106,SMS_LAWS_20181106,SMS_LITERATURE_20171108,SMS_SCIENCE_20181106',
  },
};

const doesLemmaExist = async (language, lemma) => {
  const url = `${korpInfo[language].start_query}${korpInfo[language].corpora}&cqp=%5Blemma+%3D+%22${lemma}%22%5D&start=0&end=1`;
  const response = await fetch(url);
  const json = await response.json();

  return 'hits' in json && json.hits > 0;
};

export default doesLemmaExist;
