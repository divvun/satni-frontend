import React from 'react';

const FetchArticlesError = ({ message }) => (
  <div>
    <p>Woops! {message}</p>
    <p><a href={`mailto:feedback@divvun.no?Subject=sátni.org: ${message}`} target='_top'>Report this issue</a></p>
  </div>
);

export default FetchArticlesError;
