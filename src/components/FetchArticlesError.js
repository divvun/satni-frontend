import * as Sentry from '@sentry/browser';
import React from 'react';

const FetchArticlesError = ({ message }) => (
  <div>
    <p>The word «{message}» is not in the database.</p>
  </div>
);

export default FetchArticlesError;
