import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticlesIfNeeded } from '../actions';
import Articles from './PresentArticles';

Articles.propTypes = {
  articles: PropTypes.array.isRequired
};

const mapStateToProps = (state) => {
  const { selectedLemma, articlesByLemma } = state;
  const {
    isFetching,
    items: articles
  } = articlesByLemma[selectedLemma] || {
    isFetching: false,
    items: []
  };

  return {
    isFetching,
    selectedLemma,
    articles
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArticlesIfNeeded: (nextLemma) => {
    dispatch(fetchArticlesIfNeeded(nextLemma));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
