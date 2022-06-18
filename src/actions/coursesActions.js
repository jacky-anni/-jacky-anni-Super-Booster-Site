import {
  SET_LOADING,
  COURSES,
  COURSES_ERROR,
  SEARCH_COURSES,
  CLEAR_FILTER,
  ADD_COURSE,
  ADD_COURSE_ERROR,
  GET_COURSE,
  GET_COURSE_ERROR,
  ADD_DESCRIPTION,
  ADD_DESCRIPTION_ERROR,
  ACTIVE_COURSE,
  DISABLE_COURSE,
  DELETE_COURSE,
  CHANGE_PHOTO_COURSE,
  CLEAR
} from "./types";
import axios from "axios";
import { headers } from "./../components/ultils/hearders";
import { errors } from "./../components/ultils/errors";
import { ToastMessage } from "./../components/layout/tost";

export const coursesList = () => async dispatch => {
  try {
    const res = await axios.get("/api/admin/formations", headers);
    dispatch({
      type: COURSES,
      payload: res.data
    });
  } catch (error) {
    console.log(error.response);
    // const err = errors(error);
    // dispatch({
    //   type: CATEGORIES_ERROR,
    //   payload: err
    // });
  }
};

export const getCourse = course => async dispatch => {
  try {
    const res = await axios.get(
      `/api/admin/formations/show/${course}`,
      headers
    );

    const res_photo = await fetch(`/images/courses/${res.data.photo}`);
    const res_ = {
      data: res.data,
      photo: res_photo.url
    };

    dispatch({
      type: GET_COURSE,
      payload: res_
    });
  } catch (error) {
    const err = errors(error);
    dispatch({
      type: GET_COURSE_ERROR,
      payload: err
    });
  }
};

export const createCourse = (course, id) => async dispatch => {
  try {
    const res = await axios.post(
      `/api/admin/formations/create/${id}`,
      course,
      headers
    );

    dispatch({
      type: ADD_COURSE,
      payload: res.data
    });

    ToastMessage("Cours ajoute avec succes", "success");
  } catch (error) {
    const err = errors(error);
    dispatch({
      type: ADD_COURSE_ERROR,
      payload: err
    });
    ToastMessage(err, "error");
  }
};

export const addDescription = (course, id) => async dispatch => {
  try {
    const res = await axios.put(
      `/api/admin/formations/create/description/${id}`,
      course,
      headers
    );

    dispatch({
      type: ADD_DESCRIPTION,
      payload: res.data
    });

    ToastMessage("Description ajouté  avec succes", "success");
  } catch (error) {
    const err = errors(error);
    ToastMessage(err, "error");
    // dispatch({
    //   type: ADD_DESCRIPTION_ERROR,
    //   payload: err
    // });
  }
};

export const changePhoto = (photo, status, course) => async dispatch => {
  try {
    const res = await axios.post(
      `/api/admin/save-photo/formation/${status}/${course}`,
      photo,
      headers
    );
    const image = await fetch(`/images/courses/${res.data}`);
    ToastMessage("Photo de couverture ajoute avec succes", "success");

    dispatch({
      type: CHANGE_PHOTO_COURSE,
      payload: image.url
    });
  } catch (error) {
    console.log(error);
    const err = errors(error);
    ToastMessage(err, "error");
  }
};

export const active = course => async dispatch => {
  try {
    const res = await axios.put(
      `/api/admin/formations/active/${course.id_}`,
      headers
    );

    dispatch({
      type: ACTIVE_COURSE,
      payload: res.data
    });

    ToastMessage("Formation activé  avec succes", "success");
  } catch (error) {
    const err = errors(error);
    if (error.response.status == 401) {
      ToastMessage(err, "success");
    } else {
      ToastMessage(err, "error");
    }
  }
};

export const disable = course => async dispatch => {
  try {
    const res = await axios.put(
      `/api/admin/formations/disable/${course.id_}`,
      headers
    );

    dispatch({
      type: DISABLE_COURSE,
      payload: res.data
    });

    ToastMessage("formation déactivé  avec succes", "success");
  } catch (error) {
    const err = errors(error);
    if (error.response.status == 401) {
      ToastMessage(err, "success");
    } else {
      ToastMessage(err, "error");
    }
  }
};

// delete formation
export const deleteCourse = course => async dispatch => {
  try {
    const res = await axios.delete(
      `/api/admin/formations/delete/${course.id_}`,
      headers
    );

    dispatch({
      type: DELETE_COURSE,
      payload: res.data
    });

    ToastMessage("Formation supprimé  avec succes", "success");
  } catch (error) {
    const err = errors(error);
    if (error.response.status == 401) {
      ToastMessage(err, "success");
    } else {
      ToastMessage(err, "error");
    }
  }
};

export const searchCourses = text => async dispatch => {
  dispatch({
    type: SEARCH_COURSES,
    payload: text
  });
};

export const clearFilter = () => async dispatch => {
  dispatch({
    type: CLEAR_FILTER
  });
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
