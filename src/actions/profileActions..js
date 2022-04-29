import {
  GET_PROFILE,
  GET_PROFILE_ERROR,
  SET_LOADING,
  GET_PHOTO
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
    ToastMessage(err, "error");
    dispatch({
      type: GET_PROFILE_ERROR,
      payload: err
    });
  }
};

export const changePhoto = photo => async dispatch => {
  const res = await axios.post(`/api/admin/change-photo`, photo, headers);

  // try {
  //   dispatch({
  //     type: GET_PROFILE,
  //     payload: res.data
  //   });
  // } catch (error) {
  //   const err = errors(error);
  //   ToastMessage(err, "error");
  //   dispatch({
  //     type: GET_PROFILE_ERROR,
  //     payload: err
  //   });
  // }
};
export const getImage = image => async dispatch => {
  try {
    const res = await axios.get(`/api/admin/fetchImage/${image}`, headers);
    dispatch({
      type: GET_PHOTO,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
  }
};

// export const addLogs = log => async dispatch => {};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
