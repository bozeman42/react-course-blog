import React, {Component} from 'react';
import {Link} from 'react-router-dom';


export default class Post extends Component {

  render () {
    const {title, categories, id} = this.props.post;
    
    return (
      <Link to={`/posts/${id}`}>
        <li className="list-group-item">
          {title}
        </li>
      </Link>
    );
  }
}