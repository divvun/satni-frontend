import {
  FETCH_ARTICLES_FAILURE,
  FETCH_ARTICLES_BEGIN,
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
    case FETCH_ARTICLES_BEGIN:
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
          items: action.payload.articles
        }
      };
    case FETCH_ARTICLES_FAILURE:
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
    case FETCH_ARTICLES_BEGIN:
      return {
        ...state,
        ...{
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
