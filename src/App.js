/* React tools and libs importation */
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/* App components importation */
import PostMainManager from "./containers/PostMainManager";
import PostDetails from "./containers/PostDetails";
import PostAddNew from "./containers/PostAddNew";
import PostEdit from "./containers/PostEdit";

/* utilities and Style importation */
import "./App.css";

class App extends Component {
  deletePost = postIndex => {
    //console.log("index:", postIndex);
    const tempArr = [...this.state.posts];
    tempArr.splice(postIndex, 1);
    this.setState({ posts: tempArr });
  };

  render() {
    return (
      <div>
        <h1>Posts Manager App</h1>

        <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={props => <PostMainManager {...props} />}
            />
            <Route
              exact
              path="/PostDetails/:postID"
              render={props => <PostDetails {...props} />}
            />
            <Route
              exact
              path="/PostAddNew"
              render={props => <PostAddNew {...props} />}
            />
            <Route
              exact
              path="/PostEdit/:postID"
              render={props => <PostEdit {...props} />}
            />
          </Switch>
        </Router>
        <h3>Copyright 2018 &copy; Mouhssine Idrissi Akhelij</h3>
      </div>
    );
  }
}

export default App;
