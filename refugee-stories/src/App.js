import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./components/Login/Login";
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
          <ul>
            <li>
              <NavLink exact to="/">
                Home
              </NavLink>
              {/* <NavLink
                exact
                to="https://refugee-stories.github.io/mylynh-nguyen-ui/"
              >
                Homie
              </NavLink> */}
              <NavLink exact to="/story-form">
                Share Your Story
              </NavLink>

              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>

          <Route path="/login" component={Login} />
          <Route path="/story-form" component={StoryForm} />

          <PrivateRoute
            exact
            path="/pending-approvals"
            component={PendingApprovals}
          />
        </div>
      </Router>
    );
  }
}

export default App;
