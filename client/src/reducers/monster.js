import { GET_MONSTERS, MONSTERS_ERROR } from "../actions/types";

const initialState = {
  monsters: [],
  error: {},
  loading: true
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_MONSTERS:
      return {
        ...state,
        monsters: payload,
        loading: false
      };
    case MONSTERS_ERROR:
      return {
        ...state,
        error: payload,
        loading: true
      };
    default:
      return state;
  }
}
