import {
  SET_LOADING,
  COURSES,
  COURSES_ERROR,
  GET_COURSE,
  GET_COURSE_ERROR,
  CLEAR
} from "./types";
import axios from "axios";
import { headers } from "./../components/ultils/hearders";
import { errors } from "./../components/ultils/errors";
import { ToastMessage } from "./../components/layout/tost";

export const coursesList = () => async dispatch => {
  try {
    const res = await axios.get("/api/site/formations", headers);
    dispatch({
      type: COURSES,
      payload: res.data
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const getCourse = course => async dispatch => {
  try {
    const res = await axios.get(`/api/site/formations/${course}`, headers);
    dispatch({
      type: GET_COURSE,
      payload: res.data
    });
  } catch (error) {
    const err = errors(error);
    console.log(err);

    dispatch({
      type: GET_COURSE_ERROR,
      payload: err
    });
  }
};

export const clear = () => {
  return {
    type: CLEAR
  };
};
