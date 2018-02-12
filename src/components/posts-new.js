import React, {Component} from 'react';

class PostsNew extends Component {
  
  constructor() {
    super();
    this.state = {
      title: '',
      categories: '',
      contents: ''
    };
  }
  render() {

    return (
      <form>
        <label for="title">Title:</label>
        <input name="title" type="text" value={this.state.title} />
        <label for="categories">Title:</label>
        <input name="categories" type="text" value={this.state.categories} />
        <label for="contents">Title:</label>
        <input name="contents" type="text" value={this.state.contents} />
        <button>Save</button>
        <button>Cancel</button>
      </form>
    );
  }

}

export default PostsNew;