import api from "../services/api";
import { setAlert } from "./alert";

import {
  GET_PROFILE,
  PROFILE_ERROR,
  UPDATE_PROFILE,
  GET_PROFILE_CHARACTERS,
  UPDATE_PROFILE_CHARACTERS,
  CLEAR_PROFILE,
  DELETE_ACCOUNT
} from "./types";

// Get current profiles
export const getCurrentProfile = () => async dispatch => {
  try {
    const res = await api.get("api/users/me");

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

// Create Character
export const createCharacter = (formData, history) => async dispatch => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    const res = await api.post("/api/characters", formData, config);

    dispatch({
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert("Character Created."));

    history.push("/dashboard");
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach(error => dispatch(setAlert(error.msg)));
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: error.response.statusText, status: error.response.status }
    });
  }
};

export const getProfileCharacters = () => async dispatch => {
  try {
    const res = await api.get("api/characters");

    dispatch({
      type: GET_PROFILE_CHARACTERS,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status
      }
    });
  }
};

export const deleteCharacter = id => async dispatch => {
  if (
    window.confirm("Are you sure? Your character will be permanently deleted.")
  ) {
    try {
      const res = await api.delete(`/api/characters/${id}`);
      console.log(res.data);

      dispatch({
        type: UPDATE_PROFILE_CHARACTERS,
        payload: res.data._id
      });
      dispatch({ type: UPDATE_PROFILE });
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status
        }
      });
    }
  }
};

// Delete Account and characters
export const deleteAccount = () => async dispatch => {
  if (
    window.confirm("Are you sure? Your account will be permanently deleted.")
  ) {
    try {
      const res = await api.delete("/api/users/");

      dispatch({ type: CLEAR_PROFILE });
      dispatch({ type: DELETE_ACCOUNT });
    } catch (error) {
      dispatch({
        type: PROFILE_ERROR,
        payload: {
          msg: error.response.statusText,
          status: error.response.status
        }
      });
    }
  }
};
