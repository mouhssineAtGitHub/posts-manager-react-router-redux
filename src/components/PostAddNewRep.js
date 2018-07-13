import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Field, reduxForm } from "redux-form";

const required = value => (value ? undefined : "Required");
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const maxLength50 = maxLength(50);
const maxLength100 = maxLength(100);
const maxLength200 = maxLength(200);
const title = value =>
  value && !/^[ a-z|A-Z]{1,49}$/i.test(value)
    ? "Invalid title  input"
    : undefined;
const category = value =>
  value && !/^[ a-z|A-Z]{1,99}$/i.test(value)
    ? "Invalid category input"
    : undefined;
const post = value =>
  value && !/^[ a-z|A-Z]{1,199}$/i.test(value)
    ? "Invalid post input"
    : undefined;

const renderField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <input
      {...input}
      placeholder={placeholder}
      type={type}
      className="form-fields"
    />
    <div className="err-msg">
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

class PostAddNewRep extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div className="post-add-new">
          <h2>Adding New Post</h2>
          <Field
            name="title"
            type="text"
            component={renderField}
            label="title"
            validate={[required, title, maxLength50]}
            placeholder="Title *"
          />

          <Field
            name="category"
            placeholder="Category *"
            type="text"
            component={renderField}
            label="category"
            validate={[required, category, maxLength100]}
          />

          <Field
            rows="4"
            cols="50"
            name="post"
            type="textarea"
            component={renderField}
            label="post"
            validate={[required, post, maxLength200]}
            placeholder="Write Your Post *"
          />
          <button disabled={pristine || submitting}>Save</button>
          <button disabled={pristine || submitting} onClick={reset}>
            Reset
          </button>
          <Link to="/posts-manager-react-router-redux/">
            <button>Back To Main</button>
          </Link>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: "addForm"
})(PostAddNewRep);
