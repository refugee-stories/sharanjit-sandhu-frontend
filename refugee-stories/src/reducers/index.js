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

const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
