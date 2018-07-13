import React from "react";
import PostShortcutRep from "./PostShortcutRep";

const PostMainManagerRep = props => {
  return (
    <div className="post-main-manger">
      <div className="grid-post-main-manager">
        <div className="post-header">
          <h2>Posts Main Manager</h2>
        </div>
        <div className="post-buttons">
          <i
            className="fa fa-plus-circle"
            aria-hidden="true"
            onClick={() => props.history.push("/PostAddNew")}
          />
        </div>
        <div className="post-shortcut">
          {props.posts.map((obj, index) => (
            <PostShortcutRep
              postElement={obj}
              index={index}
              key={index}
              deletePost={props.deletePost}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostMainManagerRep;
