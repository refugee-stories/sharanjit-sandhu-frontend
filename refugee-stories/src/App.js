import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login/Login";
import PendingApprovals from "./components/PendingApprovals/PendingApprovals";
import PrivateRoute from "./components/PrivateRoute";

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
              <Link to="https://refugee-stories.netlify.com/login">Login</Link>
            </li>
            {/* <li>
              <Link to="/pending-approvals">Pending Approvals</Link>
            </li> */}
          </ul>

          <Route
            path="https://refugee-stories.netlify.com/login"
            component={Login}
          />
          <PrivateRoute
            exact
            path="https://refugee-stories.netlify.com/pending-approvals"
            component={PendingApprovals}
          />
        </div>
      </Router>
    );
  }
}

export default App;
