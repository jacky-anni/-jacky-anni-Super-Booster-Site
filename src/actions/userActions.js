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
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  GET_PROFILE,
  GET_PROFILE_ERROR,
  VALIDATE_EMAIL,
  VALIDATE_EMAIL_ERROR,
  ADD_PASSWORD,
  ADD_PASSWORD_ERROR,
  ACTIVE_USER,
  DISABLE_USER,
  DELETE_USER,
  CLEAR,
  GET_PHOTO_USER
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
    const res_photo = await fetch(`/images/users/${res.data.photo}`);
    const res_ = {
      data: res.data,
      photo: res_photo.url
    };

    dispatch({
      type: LOAD_USER,
      payload: res_
    });
  } catch (error) {
    const err = errors(error);
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

// Add user
export const addUser = user => async dispatch => {
  try {
    const res = await axios.post("/api/admin/user/create", user, headers);
    if (res.status === 200) {
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: "res.data"
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

// Edit user
export const editUser = (user, id) => async dispatch => {
  try {
    const res = await axios.put(`/api/admin/user/edit/${id}`, user, headers);
    if (res.status === 200) {
      dispatch({
        type: EDIT_USER_SUCCESS,
        payload: res.data
      });
      ToastMessage("Utilisateur modifié avec succès", "success");
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "success");
    }
  } catch (error) {
    const err = errors(error);
    dispatch({
      type: EDIT_USER_ERROR,
      payload: err
    });
  }
};

export const validateEmail = (user, code) => async dispatch => {
  try {
    const res = await axios.post(
      `/api/admin/validate-email/${user}`,
      code,
      headers
    );
    if (res.status === 200) {
      dispatch({
        type: VALIDATE_EMAIL,
        payload: res.data
      });
      ToastMessage("Code validé avec succés", "success");
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "error");
    }
  } catch (error) {
    const err = errors(error);
    dispatch({
      type: VALIDATE_EMAIL_ERROR,
      payload: err
    });
  }
};

export const addPassword = data => async dispatch => {
  try {
    const res = await axios.put(`/api/admin/change-password`, data, headers);
    if (res.status === 200) {
      dispatch({
        type: ADD_PASSWORD,
        payload: res.data
      });
      ToastMessage("mot de passe ajouteré avec succés", "success");
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "error");
    }
  } catch (error) {
    const err = errors(error);
    dispatch({
      type: ADD_PASSWORD_ERROR,
      payload: err
    });
  }
};

// acive user
export const active = user => async dispatch => {
  try {
    const res = await axios.put(`/api/admin/active/${user.id_}`, user, headers);
    if (res.status === 200) {
      dispatch({
        type: ACTIVE_USER,
        payload: res.data
      });
      ToastMessage("Compte activé avec succés", "success");
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "error");
    }
  } catch (error) {
    const err = errors(error);
    ToastMessage(err, "error");
  }
};

// acive user
export const disable = user => async dispatch => {
  try {
    const res = await axios.put(
      `/api/admin/disable/${user.id_}`,
      user,
      headers
    );
    if (res.status === 200) {
      dispatch({
        type: DISABLE_USER,
        payload: res.data
      });
      ToastMessage("Compte activé avec succés", "success");
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "error");
    }

    ToastMessage("Compte desactivé avec succés", "success");
  } catch (error) {
    const err = errors(error);
    ToastMessage(err, "error");
  }
};

//disable user
export const deleteUser = user => async dispatch => {
  try {
    const res = await axios.delete(
      `/api/admin/delete/${user.id_}`,
      user,
      headers
    );
    dispatch({
      type: DELETE_USER,
      payload: res.data
    });
    ToastMessage("Compte supprimé avec succés", "success");
  } catch (error) {
    const err = errors(error);
    ToastMessage(err, "error");
  }
};

// export const addLogs = log => async dispatch => {};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};

// clear
export const clear = () => {
  return {
    type: CLEAR
  };
};
