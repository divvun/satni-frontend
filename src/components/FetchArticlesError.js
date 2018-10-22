import * as Sentry from '@sentry/browser';
import React from 'react';

const FetchArticlesError = ({ message }) => (
  <div>
    <p>Woops! {message}</p>
    <button onClick={() => Sentry.showReportDialog()}>Report feedback</button>
  </div>
);

export default FetchArticlesError;
