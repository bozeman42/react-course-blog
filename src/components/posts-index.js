import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {

  componentDidMount() {
    this.props.fetchPosts();

  }

  renderPosts() {
    const posts = Object.keys(this.props.posts).map((key) => {
      return (
        <li key={key} className="list-group-item">
          {this.props.posts[key].title}
        </li>
      );
    })
    console.log(posts);
    return posts;
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            {/* <button>Post</button> */}
            Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul>
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