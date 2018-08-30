import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectSubreddit,
  fetchArticlesIfNeeded,
  invalidateSubreddit
} from '../actions';
import Picker from '../components/Picker';
import Articles from '../components/Articles';
import Searcher from '../components/Searcher';

class AsyncApp extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount () {
    const { dispatch, selectedSubreddit } = this.props;
    dispatch(fetchArticlesIfNeeded(selectedSubreddit));
  }

  componentDidUpdate (prevProps) {
    if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = this.props;
      dispatch(fetchArticlesIfNeeded(selectedSubreddit));
    }
  }

  handleChange (nextSubreddit) {
    console.log(nextSubreddit);
    this.props.dispatch(selectSubreddit(nextSubreddit));
    this.props.dispatch(fetchArticlesIfNeeded(nextSubreddit));
  }

  handleRefreshClick (e) {
    e.preventDefault();

    const { dispatch, selectedSubreddit } = this.props;
    dispatch(invalidateSubreddit(selectedSubreddit));
    dispatch(fetchArticlesIfNeeded(selectedSubreddit));
  }

  render () {
    const { selectedSubreddit, articles, isFetching, lastUpdated } = this.props;
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
  selectedSubreddit: PropTypes.string.isRequired,
  articles: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
  const { selectedSubreddit, articlesBySubreddit } = state;
  const {
    isFetching,
    lastUpdated,
    items: articles
  } = articlesBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedSubreddit,
    articles,
    isFetching,
    lastUpdated
  };
}

export default connect(mapStateToProps)(AsyncApp);
