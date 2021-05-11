import * as Sentry from '@sentry/browser';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope((scope) => {
      Object.keys(errorInfo).forEach((key) => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    const { error } = this.state;
    if (error) {
      // render fallback UI
      return (
        <Button variant="contained" onClick={() => Sentry.showReportDialog()}>
          Report feedback
        </Button>
      );
    }
    // when there's not an error, render children untouched
    const { children } = this.props;
    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.arrayOf.isRequired,
};
