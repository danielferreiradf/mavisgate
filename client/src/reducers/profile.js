import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  UPDATE_PROFILE_CHARACTERS,
  GET_PROFILE_CHARACTERS
} from "../actions/types";

const initialState = {
  profile: null,
  profiles: [],
  characters: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false
      };
    case UPDATE_PROFILE_CHARACTERS:
      return {
        ...state,
        characters: state.characters.filter(char => char._id !== payload),
        loading: false
      };
    case GET_PROFILE_CHARACTERS:
      return {
        ...state,
        characters: payload,
        loading: false
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,
        characters: [],
        loading: false
      };
    default:
      return state;
  }
}
