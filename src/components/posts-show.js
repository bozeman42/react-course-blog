import React, {Component} from 'react';
import {connect } from 'react-redux';
import {fetchPost} from '../actions';
import {deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component {



  componentDidMount () {
    const {id} = this.props.match.params;
    console.log('ID ID ID',id);
    this.props.fetchPost(id);
  }

  onDeleteClick(){
    const {id} = this.props.match.params;
    console.log("ID, YO",id);
    this.props.deletePost(id,() => {
      this.props.history.push('/');
    });
  }

  render() {
    const {post} = this.props;
    if (!post){
      return <div></div>
    }
    return (
      <div>
        <Link to="/">&lt;&lt; Back to posts...</Link>
        <button
        className="btn btn-danger float-right"
        onClick={this.onDeleteClick.bind(this)}
        >Delete Post</button>
        <h3>{post.title}</h3>
        Categories: {post.categories}
        <p>{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps({posts},ownProps){
  return {post: posts[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchPost,deletePost})(PostsShow);