import * as actions from './articleActions';

describe('actions', () => {
  it('should create an action to request dictionary and term articles for the given lemma', () => {
    const lemma = 'guolle';
    const expectedAction = {
      type: actions.FETCH_ARTICLES_BEGIN,
      payload: {lemma}
    };
    expect(actions.fetchArticlesBegin(lemma)).toEqual(expectedAction);
  });

  it('should create an action to request a paradigm for the given stem', () => {
    const stem = {lemma: 'guolle', pos: 'N', lang: 'smj'};
    const expectedAction = {
      type: actions.FETCH_PARADIGM_REQUEST,
      stem
    };
    expect(actions.requestParadigm(stem)).toEqual(expectedAction);
  });

  it('should create an action to receive articles as text for the given lemma', () => {
    const lemma = 'guolle';
    const json = {'key': 'value'};
    const expectedAction = {
      type: actions.FETCH_ARTICLES_SUCCESS,
      payload: {
        lemma,
        articles: json
      }
    };
    expect(actions.fetchArticlesSuccess(lemma, json))
      .toEqual(expectedAction);
  });
});

describe('test conditions for fetching articles', () => {
  it('If lemma is empty, do not fetch articles', () => {
    const lemma = '';
    const state = {articlesByLemma: {}};
    expect(actions.shouldFetchArticles(state, lemma)).toEqual(false);
  });

  it('If lemma is set and no articles have been cached, fetch articles', () => {
    const lemma = 'guolle';
    const state = {articlesByLemma: {}};
    expect(actions.shouldFetchArticles(state, lemma)).toEqual(true);
  });

  it('If lemma is set and the app is fetching articles, do not try to fetch articles', () => {
    const lemma = 'guolle';
    const state = {
      articlesByLemma: {
        'guolle': {isFetching: true}
      }
    };
    expect(actions.shouldFetchArticles(state, lemma)).toEqual(false);
  });

  it('If lemma is set and the app is not fetching articles, and articles have been cached, do not try to fetch articles', () => {
    const lemma = 'guolle';
    const state = {
      articlesByLemma: {
        'guolle': {
          isFetching: false,
          items: [
              {key: 'value'}
          ]
        }
      }
    };
    expect(actions.shouldFetchArticles(state, lemma)).toEqual(false);
  });

  it('map object to array', () => {
    const data = {
      a: true,
      b: false,
      c: true
    };

    const mapTrue = (data) => {
      return Object.keys(data).filter((key) => {
        return data[key];
      });
    };
    expect(mapTrue(data)).toEqual(['a', 'c']);
  });
});
