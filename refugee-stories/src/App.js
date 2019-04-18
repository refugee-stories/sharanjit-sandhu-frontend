import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./components/Login/Login";
import LatestStories from './components/LatestStories'
import PendingApprovals from "./components/PendingApprovals/PendingApprovals";
import PrivateRoute from "./components/PrivateRoute";
import StoryForm from "./components/StoryForm/StoryForm";

import "./App.css";

// STEP I - Wrap everything inside Router. Add a Login route
// and a PendingApprovals route
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LatestStories} />
          <Route path="/login" component={Login} />
          <Route path="/story-form" component={StoryForm} />

          <PrivateRoute
            exact
            path="/pending-approvals"
            component={PendingApprovals}
          />
          <ul>
            <li>
              <a href="https://refugee-stories.github.io/mylynh-nguyen-ui/">
                About Us
              </a>
              <NavLink
                exact
                to="/"
                activeStyle={{ borderBottom: "2px solid #FFF" }}
              >
                Home
              </NavLink>
              <NavLink
                exact
                to="/story-form"
                activeStyle={{ borderBottom: "2px solid #FFF" }}
              >
                Share Your Story
              </NavLink>

              <NavLink
                exact
                to="/login"
                activeStyle={{ borderBottom: "2px solid #FFF" }}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </Router>
    );
  }
}

export default App;
