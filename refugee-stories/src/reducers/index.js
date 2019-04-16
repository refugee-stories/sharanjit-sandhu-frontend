import {
  ADD_STORY,
  FETCH_STORY_START,
  FETCH_STORY_FAIL,
  FETCH_STORY_SUCCESS
} from "../actions";

const initialState = {
  stories: [],
  story: "",
  addingStory: false,
  isFetching: false,
  error: ""
};

const reducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_STORY:
      const newStory = {
        story: action.payload,
        id: Date.now(),
        addingStory: true,
        error: ""
      };
      return {
        ...state,
        stories: [...state.stories, newStory]
      };

    case FETCH_STORY_START:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCH_STORY_SUCCESS:
      return {
        ...state,
        story: action.payload,
        isFetching: false,
        error: ""
      };
    case FETCH_STORY_FAIL:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
