import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Posts extends Component {
  render () {
    const isjson = JSON.parse(this.props.posts);
    return (
      <ul>
        {isjson.map((post, i) => <li key={i}>{post.term}</li>)}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.string.isRequired
};
