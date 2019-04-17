// import { ADD_STORY } from "../actions";

// const initialState = {
//   stories: [{ story: "story", id: 0, title: "title" }]
// };

// const reducer = (state = initialState, action) => {
//   console.log(action);
//   switch (action.type) {
//     case ADD_STORY:
//       const newStory = {
//         title: action.payload,
//         id: Date.now(),
//         story: action.payload
//       };
//       return {
//         ...state,
//         stories: [...state.stories, newStory]
//       };

//     default:
//       return state;
//   }
// };

// export default reducer;

import {
  FETCH_STORIES,
  FETCH_SUCCESS,
  FETCH_ERROR,
  ADD_STORY,
  ADD_SUCCESS,
  ADD_ERROR
} from "../actions";

const initialState = {
  stories: [],
  title: "",
  addStory: false,
  error: null,
  isFetching: false
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case FETCH_STORIES:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        fetchingStories: false,
        stories: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      };
    case ADD_STORY:
      return {
        ...state,
        addStory: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        addStory: false,
        stories: action.payload
      };
    case ADD_ERROR:
      return {
        ...state,
        addStory: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
