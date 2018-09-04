import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectLemma,
  fetchArticlesIfNeeded,
  fetchItemsIfNeeded
} from '../actions';
import Articles from '../components/Articles';
import Searcher from '../components/Searcher';
import { debounce } from 'throttle-debounce'
import { Div } from 'glamorous';

class AsyncApp extends Component {
  constructor (props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
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

  handleSearch = debounce(300, (key) => {
    console.log('handleSearch');
    this.props.dispatch(fetchItemsIfNeeded(key));
  })

  handleChange (nextLemma) {
    console.log(nextLemma);
    this.props.dispatch(selectLemma(nextLemma));
    this.props.dispatch(fetchArticlesIfNeeded(nextLemma));
  }

  render () {
    const { selectedLemma, articles, isFetching, search } = this.props;
    return (
      <Div
        css={{
          display: 'flex',
          flexDirection: 'column',
          fontFamily: 'sans-serif',
          justifyContent: 'center',
          textAlign: 'center'
        }}
      >
        <h2>Satni.org</h2>
        <Searcher
          onSelect={this.handleChange}
          onInputChange={this.handleSearch}
          search={search}
          />
        {isFetching && articles.length === 0 && <h2>Loading...</h2>}
        {selectedLemma && !isFetching && articles.length === 0 && <h2>Empty.</h2>}
        {articles.length > 0 &&
          <Div position="relative" >
            <Articles articles={articles} />
          </Div>}
      </Div>
    );
  }
}

AsyncApp.propTypes = {
  selectedLemma: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired
};

function mapStateToProps (state) {
  const { selectedLemma, articlesByLemma, search } = state;
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
    isFetching,
    search
  };
}

export default connect(mapStateToProps)(AsyncApp);
