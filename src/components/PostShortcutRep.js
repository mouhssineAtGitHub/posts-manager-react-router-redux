import React from "react";
import { Link } from "react-router-dom";

const PostShortcutRep = props => {
  const detailLink = `/posts-manager-react-router-redux/PostDetails/${
    props.postElement.id
  }`;
  return (
    <div className="shortcut" key={props.index}>
      <span className="post-shortcut-title">{props.postElement.title}</span>
      <span className="post-shortcut-category">
        {props.postElement.category}
      </span>
      <span className="post-actions">
        <Link to={detailLink}>
          <i className="fab fa-readme" />
        </Link>
        <i
          className="fas fa-trash-alt"
          onClick={() => {
            props.deletePost(props.postElement.id);
          }}
        />
        <Link
          to={`/posts-manager-react-router-redux/PostEDit/${
            props.postElement.id
          }`}
        >
          <i className="fas fa-edit" />
        </Link>
      </span>
    </div>
  );
};

export default PostShortcutRep;
