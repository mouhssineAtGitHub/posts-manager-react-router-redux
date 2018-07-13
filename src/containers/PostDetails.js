import React from "react";
import { connect } from "react-redux";

import PostDetailsRep from "../components/PostDetailsRep";
//import { DELETE_POST } from "../actions";
import * as Types from "../actions";

const PostDetails = props => {
  const postID = props.match.params.postID;
  const tabIndex = props.posts.findIndex(element => {
    return parseInt(element.id, 10) === parseInt(postID, 10);
  });
  const myPost = props.posts[tabIndex];

  return (
    <PostDetailsRep {...props} deletePost={props.deletePost} myPost={myPost} />
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //deletePost: postID => dispatch(DELETE_POST(postID))
    deletePost: postID =>
      dispatch(Types.actionCreator(Types.DELETE_POST, postID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetails);
