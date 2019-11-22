import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticlesIfNeeded } from '../articleActions';
import PresentArticles from './PresentArticles';
import FetchArticlesError from './FetchArticlesError';

class Articles extends Component {
  componentDidUpdate () {
    this.props.fetchArticlesIfNeeded(this.props.lemma);
  }

  componentDidMount () {
    this.props.fetchArticlesIfNeeded(this.props.lemma);
  }

  render () {
    const {articlesByLemma, lemma} = this.props;

    if (articlesByLemma.errorMessage) {
      return (
        <FetchArticlesError message={articlesByLemma.errorMessage} />
      );
    }

    if (articlesByLemma.isFetching) {
      return <div>Loading articles …</div>;
    }

    if (articlesByLemma[lemma] && articlesByLemma[lemma].length > 0) {
      return <PresentArticles articles={articlesByLemma[lemma]} />;
    } else {
      return <div>No results found for {lemma}</div>;
    }
  }
}

Articles.propTypes = {
  articlesByLemma: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { articlesByLemma } = state;

  return {
    articlesByLemma
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArticlesIfNeeded: (nextLemma) => {
    dispatch(fetchArticlesIfNeeded(nextLemma));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
