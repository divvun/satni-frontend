import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticlesIfNeeded } from '../actions';
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
    const {errorMessage, articlesByLemma, lemma} = this.props;

    const {
      isFetching,
      items
    } = articlesByLemma[lemma] || {
      isFetching: false,
      items: []
    };

    console.log('uff', errorMessage, isFetching);

    if (errorMessage) {
      return (
        <FetchArticlesError message={errorMessage} />
      );
    }

    if (isFetching) {
      return <div>Loading articles …</div>;
    }
    //
    console.log(items);
    return <PresentArticles articles={items} />;
  }
}

Articles.propTypes = {
  articlesByLemma: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { articlesByLemma, errorMessage } = state;

  return {
    articlesByLemma,
    errorMessage
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchArticlesIfNeeded: (nextLemma) => {
    dispatch(fetchArticlesIfNeeded(nextLemma));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
