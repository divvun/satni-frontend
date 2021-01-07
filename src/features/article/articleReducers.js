import {
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_BEGIN,
  FETCH_ARTICLES_SUCCESS
} from './articleActions';

const articles = (
  state = [],
  action
) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
      return action.payload.articles;
    case FETCH_ARTICLES_FAILURE:
      return [];
    default:
      return state;
  }
};

export const articlesByLemma = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_BEGIN:
      return {
        ...state,
        ...{
          isFetching: true,
          errorMessage: null,
          [action.payload.lemma]: articles(state[action.payload.lemma], action)
        }
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        ...{
          isFetching: false,
          errorMessage: null,
          [action.payload.lemma]: articles(state[action.payload.lemma], action)
        }
      };
    case FETCH_ARTICLES_FAILURE:
      return {
        ...state,
        ...{
          isFetching: false,
          errorMessage: action.payload.error,
          [action.payload.lemma]: articles(state[action.payload.lemma], action)
        }
      };
    default:
      return state;
  }
};

export const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_FAILURE':
      return action.payload.error;
    case 'FETCH_ARTICLES_BEGIN':
    case 'FETCH_ARTICLES_SUCCESS':
      return null;
    default:
      return state;
  }
};
