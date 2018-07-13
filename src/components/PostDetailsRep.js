import React from "react";
import { Link } from "react-router-dom";

const PostDetailsRep = props => {
  return (
    <div className="post-details">
      <h2>Post Details</h2>
      <div className="wrapper">
        <div className="post-details-actions">
          <Link to="/">
            <button
              className="btn-big"
              onClick={() => {
                props.deletePost(props.myPost.id);
              }}
            >
              Delete Post <i className="fas fa-trash-alt" aria-hidden="true" />
            </button>
          </Link>

          <Link to={`/PostEdit/${props.myPost.id}`}>
            <button className="btn-big">
              Edit Post <i className="fas fa-edit" />
            </button>
          </Link>

          <Link to="/">
            <button className="btn-big">
              Back to Posts <i className="fas fa-home" />
            </button>
          </Link>
        </div>
        <div className="post-details-data">
          <p className="post-details-title">
            <span>Title:</span> {props.myPost.title}
          </p>
          <p className="post-details-catgory">
            <span>Category:</span> {props.myPost.category}
          </p>
          <p className="post-details-post">
            <span>Post:</span> {props.myPost.post}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PostDetailsRep;
