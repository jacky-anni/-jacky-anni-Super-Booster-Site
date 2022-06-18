import {
  SET_LOADING,
  MODULES,
  CREATE_MODULES,
  CREATE_MODULES_ERROR,
  EDIT_MODULES,
  EDIT_MODULES_ERROR,
  DELETE_MODULES,
  SHOW_MODULE,
  SHOW_MODULE_ERROR,
  CLEAR
} from "./types";
import axios from "axios";
import { headers } from "./../components/ultils/hearders";
import { errors } from "./../components/ultils/errors";
import { ToastMessage } from "./../components/layout/tost";

// modules list
export const modulesList = course => async dispatch => {
  try {
    const res = await axios.get(`/api/admin/modules/${course}`, headers);
    dispatch({
      type: MODULES,
      payload: res.data
    });
  } catch (error) {
    const err = errors(error);
    ToastMessage(error, "error");
  }
};

// show modules
export const getModule = (course, module) => async dispatch => {
  try {
    const res = await axios.get(
      `/api/admin/module/show/${course}/${module}`,
      headers
    );
    dispatch({
      type: SHOW_MODULE,
      payload: res.data
    });
  } catch (error) {
    const err = errors(error);
    ToastMessage(error, "error");
    console.log(err);

    dispatch({
      type: SHOW_MODULE_ERROR,
      payload: err
    });
  }
};

export const addModule = (module, course) => async dispatch => {
  try {
    const res = await axios.post(
      `/api/admin/modules/create/${course}`,
      module,
      headers
    );
    dispatch({
      type: CREATE_MODULES,
      payload: res.data
    });
    ToastMessage("Module ajouté  avec succes", "success");
  } catch (error) {
    const err = errors(error);
    dispatch({
      type: CREATE_MODULES_ERROR,
      payload: err
    });
  }
};

export const editModule = (data, course, module) => async dispatch => {
  try {
    const res = await axios.put(
      `/api/admin/modules/edit/${course}/${module}`,
      data,
      headers
    );
    dispatch({
      type: EDIT_MODULES,
      payload: res.data
    });
    ToastMessage("Module modifie avec succes", "success");
  } catch (error) {
    const err = errors(error);
    console.log(err);

    dispatch({
      type: EDIT_MODULES_ERROR,
      payload: err
    });
  }
};

export const deleteModule = (course, module) => async dispatch => {
  try {
    const res = await axios.delete(
      `/api/admin/modules/delete/${course}/${module}`,
      headers
    );

    dispatch({
      type: DELETE_MODULES,
      payload: res.data
    });
    ToastMessage("Module supprime avec succes", "success");
  } catch (error) {
    const err = errors(error);
    ToastMessage(err, "error");
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
