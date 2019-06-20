import api from "../services/api";

import { GET_MONSTERS, MONSTERS_ERROR } from "./types";

export const getMonsters = () => async dispatch => {
  try {
    const res = await api.get("api/monsters");

    dispatch({
      type: GET_MONSTERS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: MONSTERS_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};
