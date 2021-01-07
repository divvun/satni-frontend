import {
  FETCH_ARTICLES_ERROR,
  FETCH_ARTICLES_REQUEST,
  FETCH_ARTICLES_SUCCESS
} from './articleActions';

const articles = (
  state = {
    isFetching: false,
    items: []
  },
  action
) => {
  switch (action.type) {
    case FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        ...{
          isFetching: true
        }
      };
    case FETCH_ARTICLES_SUCCESS:
      return {
        ...state,
        ...{
          isFetching: false,
          items: action.articles
        }
      };
    case FETCH_ARTICLES_ERROR:
      return {
        ...state,
        ...{
          isFetching: false,
          items: []
        }
      };
    default:
      return state;
  }
};

export const articlesByLemma = (state = {}, action) => {
  switch (action.type) {
    case FETCH_ARTICLES_SUCCESS:
    case FETCH_ARTICLES_REQUEST:
      return {
        ...state,
        ...{
          [action.lemma]: articles(state[action.lemma], action)
        }
      };
    default:
      return state;
  }
};

export const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_ARTICLES_ERROR':
      return action.message;
    case 'FETCH_ARTICLES_REQUEST':
    case 'FETCH_ARTICLES_SUCCESS':
      return null;
    default:
      return state;
  }
};
