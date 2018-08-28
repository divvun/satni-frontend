import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Posts extends Component {
  render () {
    let data = this.props.posts
    const isjson = (data.indexOf('{') == 0) ? '[' + data.slice(data.indexOf('{')+1,data.lastIndexOf('}')) + ']' : data
    return (
      <ul>
        {JSON.parse(isjson).map((post, i) => <li key={i}>{post.term}</li>)}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.string.isRequired
};
