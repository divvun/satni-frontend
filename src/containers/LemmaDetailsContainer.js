import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchParadigmIfNeeded } from '../actions';
import { stemToKey } from '../utils'
import LemmaDetails from '../component/LemmaDetails';

class LemmaDetailsContainer extends Component {
  componentDidUpdate () {
    this.props.fetchParadigmIfNeeded(this.props.stem);
  }

  componentDidMount () {
    this.props.fetchParadigmIfNeeded(this.props.stem);
  }

  render () {
    const {errorMessage, paradigmByStem, stem} = this.props;

    const {
      isFetching,
      paradigm
    } = paradigmByStem[stemToKey(stem)] || {
      isFetching: false,
      paradigm: {}
    };

    console.log('uff', errorMessage, isFetching);

    if (errorMessage) {
      return (
        <FetchArticlesError message={errorMessage} />
      );
    }

    if (isFetching) {
      return <div>Loading paradigm …</div>;
    }
    //
    console.log(items);
    return <LemmaDetails stem={stem} paradigm={paradigm} />;
  }
}

const mapStateToProps = (state) => {
  const { paradigmByStem, errorMessage } = state;

  return {
    paradigmByStem,
    errorMessage
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchParadigmIfNeeded: (nextStem) => {
    dispatch(fetchParadigmIfNeeded(nextStem));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LemmaDetailsContainer);
