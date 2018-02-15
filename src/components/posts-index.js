import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts, fetchTooMuch } from '../actions';
import Post from './post';
class PostsIndex extends Component {

  componentWillMount() {
    this.props.fetchPosts();
    this.props.fetchTooMuch();
  }

  renderPosts() {
    const {howmuch} = this.props;
    const posts = Object.keys(this.props.posts).map((key) => {
      return (
        <div>
          {howmuch}
          <Post key={key} post={this.props.posts[key]} />
        </div>
      );
    })
    console.log(posts);
    console.log('howmuch?',this.props.howmuch);
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
  return {
    posts: state.posts,
    howmuch: state.howmuch
  };
}

export default connect(mapStateToProps, { fetchPosts, fetchTooMuch })(PostsIndex);