import React, { Component } from "react";
import { connect } from "react-redux";
import PostAddNewRep from "../components/PostAddNewRep";
//import { ADD_POST } from "../actions";
import * as Types from "../actions";

class PostAddNew extends Component {
  render() {
    return (
      <PostAddNewRep
        onSubmit={values => {
          window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
          this.props.addPost(values);
          this.props.history.push("/");
        }}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addPost: payload => dispatch(Types.actionCreator(Types.ADD_POST, payload))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostAddNew);
