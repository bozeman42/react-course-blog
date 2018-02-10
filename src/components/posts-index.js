import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();

  }

  renderPosts() {
    const posts = Object.keys(this.props.posts).map((key) => {
      return (
        <li key={key}>
          {this.props.posts[key].title}
        </li>
      );
    })
    console.log(posts);
    return posts;
  }

  render() {
    return (
      <ul>
        {this.renderPosts()}
      </ul>
    );

  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);