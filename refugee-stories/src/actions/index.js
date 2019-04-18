import axios from "axios";

export const LOGIN_START = "LOGIN_START";

export const FETCH_STORIES = "FETCH_STORIES";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";
export const ADD_STORY = "ADD_STORY";
export const ADD_SUCCESS = "GET_SUCCESS";
export const ADD_ERROR = "GET_ERROR";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://refugeestories-be.herokuapp.com/api/auth/login", creds, {})
    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.payload });
      getData();
    });
};

export const getData = () => {
  axios
    .post("https://refugeestories-be.herokuapp.com/api/stories", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

// //Named export
// export const addStory = story => {
//   // console.log(story);
//   return {
//     type: "ADD_STORY",
//     payload: addStory
//   };
// };

export const getStories = () => dispatch => {
  // console.log("Fired!");
  dispatch({ type: FETCH_STORIES });
  axios
    .get("https://refugeestories-be.herokuapp.com/api/stories/")
    .then(res => {
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_ERROR, payload: error });
    });
};

export const addStory = data => dispatch => {
  // console.log("Fired!");
  dispatch({ type: ADD_STORY });
  axios
    .post("https://refugeestories-be.herokuapp.com/api/stories", data)
    .then(res => {
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch(error => {
      dispatch({ type: ADD_ERROR, payload: error });
    });
};
