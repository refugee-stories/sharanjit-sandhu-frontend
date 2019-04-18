import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Login from "./components/Login/Login";
import Stories from "./components/Stories";
import PendingApprovals from "./components/PendingApprovals/PendingApprovals";
import PrivateRoute from "./components/PrivateRoute";
import StoryForm from "./components/StoryForm/StoryForm";
import LatestStories from "./components/LatestStories";
import axios from "axios";

import "./App.css";
import { getStories } from "./actions";

// STEP I - Wrap everything inside Router. Add a Login route
// and a PendingApprovals route
const App = props => {
  const [latest, setLastest] = useState([]);
  const [stories, setStories] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [pending, setPending] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://refugeestories-be.herokuapp.com/api/stories/latest")
      .then(res => setLastest(res.data))
      .catch(err => console.log(err));
    axios
      .get("https://refugeestories-be.herokuapp.com/api/stories/")
      .then(res => setStories(res.data))
      .catch(err => console.log(err));
  });

  const toggleLogin = () => {
    if (loggedIn === false) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  };

  const deleteStory = id => {
    axios({
      method: "delete",
      url: `https://refugeestories-be.herokuapp.com/api/stories/reject/${id}`,
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => console.log("success"))
      .catch(err => console.log(err));
  };

  const approveStory = id => {
    axios({
      method: "post",
      url: `https://refugeestories-be.herokuapp.com/api/stories/approve/${id}`,
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => console.log(res.data.newStoryID))
      .catch(err => console.log(err));
  };

  const getPending = () => {
    console.log(localStorage.getItem('token'))
    axios({
      method: "get",
      url: "https://refugeestories-be.herokuapp.com/api/admin/stories",
      headers: { Authorization: `Bearer ${localStorage.getItem(token)}` }
    })
      .then(res => setPending(res.data))
      .catch(err => console.log(err));
  };
  return (
    <Router>
      <div className="App">
        <Route
          exact
          path="/"
          render={props => <LatestStories latest={latest} />}
        />
        <Route
          exact
          path="/stories"
          render={props => <Stories latest={latest} stories={stories} />}
        />

        <Route
          path="/login"
          render={props => <Login toggleLogin={toggleLogin} {...props} />}
        />
        <Route path="/story-form" component={StoryForm} />

        <Route
          exact
          path="/pending-approvals"
          render={props => (
            <PendingApprovals
              pending={pending}
              approveStory={approveStory}
              deleteStory={deleteStory}
              getPending={getPending}
              {...props}
            />
          )}
        />

        <nav className="upper-nav">
          <div className="top-nav-div">
            <NavLink
              exact
              to="/stories"
              activeStyle={{ borderBottom: "2px solid #FFF" }}
            >
              Stories
            </NavLink>
            <NavLink
              exact
              to="/story-form"
              activeStyle={{ borderBottom: "2px solid #FFF" }}
            >
              Share Your Story
            </NavLink>
          </div>
          <h1 className="header">Refugee Stories</h1>
        </nav>
        <nav className="lower-nav">
          <NavLink
            exact
            to="/"
            activeStyle={{ borderBottom: "2px solid #FFF" }}
          >
            Home
          </NavLink>
          <a href="https://refugee-stories.github.io/mylynh-nguyen-ui/">
            About Us
          </a>
          <NavLink
            exact
            to="/login"
            activeStyle={{ borderBottom: "2px solid #FFF" }}
          >
            Admin
          </NavLink>
        </nav>
        <h6>
          Source:
          https://medium.com/globalgoodness/12-powerful-refugee-stories-from-around-the-world-5c0a54d2e2ed{" "}
        </h6>
      </div>
    </Router>
  );
};

export default App;
