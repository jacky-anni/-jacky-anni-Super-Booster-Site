import { SEARCH_USERS, CLEAR_FILTER, GET_USERS, SET_LOADING } from "./types";
import axios from "axios";

export const getUsers = log => async dispatch => {
  const res = await axios.get("https://api.github.com/users");
  const data = await res.data;

  dispatch({
    type: GET_USERS,
    payload: data
  });
};

export const searchUsers = text => async dispatch => {
  dispatch({
    type: SEARCH_USERS,
    payload: text
  });
};

// clear filter
export const clearFilter = () => async dispatch => {
  dispatch({
    type: CLEAR_FILTER
  });
};

// export const addLogs = log => async dispatch => {};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
