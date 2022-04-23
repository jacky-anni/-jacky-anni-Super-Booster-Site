import {
  SEARCH_USERS,
  CLEAR_FILTER,
  GET_USERS,
  SET_LOADING,
  AUTH_USER,
  SUCCCESS_LOGIN,
  FAIL_LOGIN,
  LOAD_USER,
  ERROR_USER,
  LOGOUT_SUCCESS
} from "./types";
import axios from "axios";
import { headers } from "./../components/ultils/hearders";
import setAuthToken from "./../components/ultils/setAuthToken";

export const getUsers = () => async dispatch => {
  const res = await axios.get("/api/admin/users");
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

// login
export const login = user => async dispatch => {
  try {
    const res = await axios.post("/api/admin/login", user, headers);
    dispatch({
      type: SUCCCESS_LOGIN,
      payload: res.data
    });
  } catch (error) {
    if (error.response.status == 406) {
      var errors = error.response.data.errors;
    } else {
      var errors = error.response.data.msg;
    }

    dispatch({
      type: FAIL_LOGIN,
      payload: errors
    });
  }
};

// get user connect
export const getUser = async => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/admin/user");
    dispatch({
      type: LOAD_USER,
      payload: res.data
    });
  } catch (error) {
    dispatch({
      type: ERROR_USER
    });
  }
};

export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
};

// export const addLogs = log => async dispatch => {};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
