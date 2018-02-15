import React, {Component} from 'react';
import { Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions';

// TODO: fix form validation. Bootstrap changed the way this works.
class PostsNew extends Component {

  renderField(field) {
    const className = inputState(field);
    console.log(className);
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
        className="form-control"
        type={field.type}
        {...field.input}
        />
        <div className="text-danger">
          {field.meta.touched?field.meta.error:null}
        </div>
      </div>
    )
  }

  onSubmit(values) {
    console.log(`values:`,values);
    this.props.createPost(values,
      () => this.props.history.push('/')
    );
  }

  render() {
    console.log(this.props);
    const {handleSubmit} = this.props;
    return (
      <form className="" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <Field
          label="Title"
          name="title"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Categories"
          name="categories"
          type="text"
          component={this.renderField}
        />
        <Field
          label="Content"
          name="content"
          type="textarea"
          component={this.renderField}
        />
        <button className="btn btn-primary" type="submit" >Save</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }

}

function validate(values){
  const errors = {};
  if (!values.title){
    errors.title = "Enter a title";
  }
  if (!values.categories){
    errors.categories = "Enter a category";
  }
  if (!values.content) {
    errors.content = "Enter some content";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null,{createPost})(PostsNew)
);

function inputState(field){
  const {meta: {touched,error}} = field;
  const validationState = touched?'was-validated':'needs-validation';
  const valid = error?'invalid':'valid';
  return '';
  // return `form-group ${validationState}:${valid}`;
}