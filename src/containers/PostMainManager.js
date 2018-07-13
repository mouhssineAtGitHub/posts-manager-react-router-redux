import React, { Component } from "react";
import { connect } from "react-redux";
import * as Types from "../actions";
import PostMainManagerRep from "../components/PostMainManagerRep";

class PostMainManager extends Component {
  render() {
    return (
      <PostMainManagerRep
        {...this.props}
        posts={this.props.posts}
        deletePost={this.props.deletePost}
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
    //deletePost: postID => dispatch(DELETE_POST(postID))
    deletePost: postID =>
      dispatch(Types.actionCreator(Types.DELETE_POST, postID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostMainManager);
