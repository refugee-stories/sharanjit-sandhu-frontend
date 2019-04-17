import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const ADD_STORY = "ADD_STORY";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://refugeestories-be.herokuapp.com/api/auth/login", creds, {})
    .then(res => {
      localStorage.setItem("token", res.data.payload);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.payload });
      getData();
    });
};

export const getData = () => {
  axios
    .get("https://refugeestories-be.herokuapp.com/api/stories", {
      headers: { Authorization: localStorage.getItem("token") }
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
};

export const addStory = storyName => {
  // console.log(storyName);
  return {
    type: ADD_STORY,
    payload: storyName
  };
};

export const FETCH_STORY_START = "FETCH_STORY_START";
export const FETCH_STORY_SUCCESS = "FETCH_STORY_SUCCESS";
export const FETCH_STORY_FAIL = "FETCH_STORY_FAIL";

export const getStory = () => dispatch => {
  dispatch({ type: FETCH_STORY_START });
  axios
    .get("https://refugeestories-be.herokuapp.com/api/stories")
    .then(res =>
      dispatch({ type: FETCH_STORY_SUCCESS, payload: res.data.results })
    )
    .catch(err => dispatch({ type: FETCH_STORY_FAIL, payload: err }));
};
