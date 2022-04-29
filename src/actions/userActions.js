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
  LOGOUT_SUCCESS,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  GET_PROFILE,
  GET_PROFILE_ERROR
} from "./types";
import axios from "axios";
import { headers } from "./../components/ultils/hearders";
import setAuthToken from "./../components/ultils/setAuthToken";
import { errors } from "./../components/ultils/errors";
import { ToastMessage } from "./../components/layout/tost";

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
    const err = errors(error);
    dispatch({
      type: FAIL_LOGIN,
      payload: err
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
    const err = errors(error);
    dispatch({
      type: ADD_USER_ERROR
    });
  }
};

export const logout = () => async dispatch => {
  dispatch({
    type: LOGOUT_SUCCESS
  });
};

// Add user
export const addUser = user => async dispatch => {
  try {
    const res = await axios.post("/api/admin/user/create", user, headers);
    if (res.status === 200) {
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: res.data
      });
      ToastMessage("Utilisateur enregistré avec succès", "success");
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "success");
    }
  } catch (error) {
    const err = errors(error);
    dispatch({
      type: ADD_USER_ERROR,
      payload: err
    });
  }
};

// export const addLogs = log => async dispatch => {};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
