import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectLemma,
  fetchArticlesIfNeeded
} from '../actions';
import Articles from '../components/Articles';
import Searcher from '../components/Searcher';

class AsyncApp extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
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

  render () {
    const { selectedLemma, articles, isFetching } = this.props;
    return (
      <div>
        <Searcher onChange={this.handleChange} />
        {isFetching && articles.length === 0 && <h2>Loading...</h2>}
        {selectedLemma && !isFetching && articles.length === 0 && <h2>Empty.</h2>}
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
  articles: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function mapStateToProps (state) {
  const { selectedLemma, articlesByLemma } = state;
  const {
    isFetching,
    items: articles
  } = articlesByLemma[selectedLemma] || {
    isFetching: false,
    items: []
  };

  return {
    selectedLemma,
    articles,
    isFetching
  };
}

export default connect(mapStateToProps)(AsyncApp);
