import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectLemma,
  fetchArticlesIfNeeded,
  invalidateLemma
} from '../actions';
import Articles from '../components/Articles';
import Searcher from '../components/Searcher';

class AsyncApp extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount () {
    const { dispatch, selectedLemma } = this.props;
    dispatch(fetchArticlesIfNeeded(selectedLemma));
  }

  componentDidUpdate (prevProps) {
    if (this.props.selectedLemma !== prevProps.selectedLemma) {
      const { dispatch, selectedLemma } = this.props;
      dispatch(fetchArticlesIfNeeded(selectedLemma));
    }
  }

  handleChange (nextLemma) {
    console.log(nextLemma);
    this.props.dispatch(selectLemma(nextLemma));
    this.props.dispatch(fetchArticlesIfNeeded(nextLemma));
  }

  handleRefreshClick (e) {
    e.preventDefault();

    const { dispatch, selectedLemma } = this.props;
    dispatch(invalidateLemma(selectedLemma));
    dispatch(fetchArticlesIfNeeded(selectedLemma));
  }

  render () {
    const { selectedLemma, articles, isFetching, lastUpdated } = this.props;
    return (
      <div>
        <Searcher onChange={this.handleChange} />
        <p>
          {lastUpdated &&
            <span>
              Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
              {' '}
            </span>}
          {!isFetching &&
            <button onClick={this.handleRefreshClick}>
              Refresh
            </button>}
        </p>
        {isFetching && articles.length === 0 && <h2>Loading...</h2>}
        {!isFetching && articles.length === 0 && <h2>Empty.</h2>}
        {articles.length > 0 &&
          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
            <Articles articles={articles} />
          </div>}
      </div>
    );
  }
}

AsyncApp.propTypes = {
  selectedLemma: PropTypes.string.isRequired,
  articles: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
  const { selectedLemma, articlesByLemma } = state;
  const {
    isFetching,
    lastUpdated,
    items: articles
  } = articlesByLemma[selectedLemma] || {
    isFetching: true,
    items: []
  };

  return {
    selectedLemma,
    articles,
    isFetching,
    lastUpdated
  };
}

export default connect(mapStateToProps)(AsyncApp);
