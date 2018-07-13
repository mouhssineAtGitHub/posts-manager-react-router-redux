import React, { Component } from "react";
import { connect } from "react-redux";

//import { EDIT_POST } from "../actions";
import * as Types from "../actions";

import PostEditRep from "../components/PostEditRep";

class PostEdit extends Component {
  render() {
    const postID = this.props.match.params.postID;
    const myposts = this.props.posts;
    const tabIndex = myposts.findIndex(element => {
      return parseInt(element.id, 10) === parseInt(postID, 10);
    });

    const myPost = this.props.posts[tabIndex];

    return (
      <div>
        <PostEditRep
          onSubmit={values => {
            window.alert(`You edited:\n\n${JSON.stringify(values, null, 2)}`);
            this.props.editPost(values);
            this.props.history.push("/posts-manager-react-router-redux/");
          }}
          initialValues={{
            id: myPost.id,
            title: myPost.title,
            category: myPost.category,
            post: myPost.post
          }}
        />
      </div>
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
    //editPost: payload => dispatch(EDIT_POST(payload))
    editPost: payload => dispatch(Types.actionCreator(Types.EDIT_POST, payload))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostEdit);
