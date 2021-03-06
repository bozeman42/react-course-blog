import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';
import Post from './post';
class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();

  }

  renderPosts() {
    const posts = Object.keys(this.props.posts).map((key) => {
      return (
        <Post key={key} post={this.props.posts[key]} />
      );
    })
    console.log(posts);
    return posts;
  }

  render() {
    return (
      <div>
        <div className="text-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );

  }
}

function mapStateToProps(state) {
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);