import {
  GET_PROFILE,
  GET_PROFILE_ERROR,
  SET_LOADING,
  GET_PHOTO,
  CHANGE_PHOTO,
  GET_INFOS_PROFILE,
  GET_INFOS_PROFILE_ERROR,
  CREATE_PROFILE,
  CREATE_PROFILE_ERROR,
  EDIT_PASSWORD,
  EDIT_PASSWORD_ERROR,
  ADD_BIOGRAPHIE,
  ADD_BIOGRAPHIE_ERROR,
  CLEAR
} from "./types";
import axios from "axios";
import { headers } from "./../components/ultils/hearders";
import setAuthToken from "./../components/ultils/setAuthToken";
import { errors } from "./../components/ultils/errors";
import { ToastMessage } from "./../components/layout/tost";

export const getProfile = username => async dispatch => {
  try {
    const res = await axios.get(`/api/admin/profile/${username}`, headers);
    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (error) {
    const err = errors(error);
    dispatch({
      type: GET_PROFILE_ERROR,
      payload: err
    });
  }
};

export const changePhoto = (photo, status, course) => async dispatch => {
  try {
    const res = await axios.post(
      `/api/admin/save-photo/${status}`,
      photo,
      headers
    );
    const image = await fetch(`/images/users/${res.data}`);
    dispatch({
      type: CHANGE_PHOTO,
      payload: image.url
    });
  } catch (error) {
    console.log(error);
    const err = errors(error);
    ToastMessage(err, "error");
    dispatch({
      type: GET_PROFILE_ERROR,
      payload: err
    });
  }
};

export const getImageProfile = username => async dispatch => {
  try {
    const user = await axios.get(`/api/admin/profile/${username}`, headers);

    let photo;
    if (user.data.photo !== null) {
      const res = await fetch(`/images/users/${user.data.photo}`);
      photo = res.url;
    } else {
      photo = null;
    }

    dispatch({
      type: GET_PHOTO,
      payload: photo
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

//getInfoProfile
export const getInfoProfile = username => async dispatch => {
  try {
    const res = await axios.get(
      `/api/admin/profile/infos_profile/${username}`,
      headers
    );

    dispatch({
      type: GET_INFOS_PROFILE,
      payload: res.data
    });
  } catch (error) {
    const err = errors(error);
    dispatch({
      type: GET_INFOS_PROFILE_ERROR,
      payload: err
    });
  }
};

export const createProfile = (user, id) => async dispatch => {
  try {
    const res = await axios.post(
      `/api/admin/infos_profile/create/${id}`,
      user,
      headers
    );
    dispatch({
      type: CREATE_PROFILE,
      payload: res.data
    });
    ToastMessage("Profile modifie avec succes", "success");
  } catch (error) {
    const err = errors(error);
    ToastMessage(err, "error");
    dispatch({
      type: CREATE_PROFILE_ERROR,
      payload: err
    });
  }
};

export const addBio = (bio, id) => async dispatch => {
  try {
    const res = await axios.post(
      `/api/admin/description/create/${id}`,
      bio,
      headers
    );
    dispatch({
      type: ADD_BIOGRAPHIE,
      payload: res.data
    });
    ToastMessage("Biographie modife avec succes", "success");
  } catch (error) {
    const err = errors(error);
    ToastMessage(err, "error");
    dispatch({
      type: ADD_BIOGRAPHIE,
      payload: err
    });
  }
};

export const editPassword = password => async dispatch => {
  try {
    const res = await axios.post(
      "/api/admin/password_profile/change",
      password,
      headers
    );
    if (res.status == 200) {
      dispatch({
        type: EDIT_PASSWORD,
        payload: res.data
      });
      ToastMessage("Mot de passe modifie avec succes", "success");
    } else {
      ToastMessage("Erreur, Reessayer", "error");
    }
  } catch (error) {
    const err = errors(error);
    // ToastMessage(err, "error");
    dispatch({
      type: EDIT_PASSWORD_ERROR,
      payload: err
    });
  }
};

export const clear = () => {
  return {
    type: CLEAR
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
