import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchArticlesIfNeeded } from '../actions';
import Articles from '../components/Articles';
import Searcher from '../components/Searcher';
import Languages from '../components/Languages';
import { debounce } from 'throttle-debounce'
import glamorous, { Div, A, Footer } from 'glamorous';

const MyGrid = glamorous.div({
  margin: 'auto',
  // You can use @supports with glamor!
  // So you can use @supports with glamorous as well!
  '@supports (display: grid)': {
    display: 'grid',
    gridGap: 10,
    gridTemplateAreas: `
      "header header header"
      "sidebar content content"
      "footer footer footer"
    `,
  },
});

const Box = glamorous.div({
  padding: 10,
  fontSize: '120%'
});

class AsyncApp extends Component {
  componentDidMount () {
    this.props.fetchArticlesIfNeeded(this.props.selectedLemma);
  }

  componentDidUpdate (prevProps) {
    if (this.props.selectedLemma !== prevProps.selectedLemma) {
      this.props.fetchArticlesIfNeeded(this.props.selectedLemma);
    }
  }

  fetchArticlesIfNeeded = (nextLemma) => {
    this.props.fetchArticlesIfNeeded(nextLemma)
  }

  render () {
    const { selectedLemma, articles, isFetching } = this.props;
    return (
      <MyGrid>
        <Box css={{ gridArea: 'header'}}>
          <Div css={{
            fontWeight: "bold",
            fontSize: "200%",
            textAlign: "center"}}>
            sátni.org
          </Div>
        </Box>
        <Box css={{
          gridArea: 'sidebar'
        }}>
          <Languages/>
        </Box>
        <Box css={{
          gridArea: 'content',
          paddingBottom: "50px"
        }}>
         <Searcher />
            {isFetching && articles.length === 0 && <h2>Loading...</h2>}
            {selectedLemma && !isFetching && articles.length === 0 && <h2>Empty.</h2>}
            {articles.length > 0 &&
              <Div position="relative" >
                <Articles articles={articles} />
              </Div>}
        </Box>
        <Box css={{
          gridArea: 'footer'
        }}>
        <Footer css={{
          position:"fixed",
          left:"0px",
          bottom:"0px",
          height:"50px",
          width:"100%",
          background:"#999",
          textAlign: "center"
        }}>
          Sámi dictionaries and terms delivered by<br/>
          <A href="http://divvun.no">Divvun</A>, <A href="http://giella.org">Giellagáldu</A> and <A href="http://giellatekno.uit.no">Giellatekno</A>
          </Footer>
          </Box>
      </MyGrid>
    );
  }
}

AsyncApp.propTypes = {
  selectedLemma: PropTypes.string.isRequired,
  articles: PropTypes.array.isRequired,
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
    selectedLemma,
    articles,
    isFetching,
  };
}

const mapDispatchToProps = (dispatch) => ({
  fetchArticlesIfNeeded: (nextLemma) => {
   dispatch(fetchArticlesIfNeeded(nextLemma))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(AsyncApp);
