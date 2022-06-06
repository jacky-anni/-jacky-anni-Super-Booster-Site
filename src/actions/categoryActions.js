import {
  SET_LOADING,
  CATEGORIES,
  CATEGORIES_ERROR,
  ADD_CATEGORIE,
  ADD_CATEGORIE_ERROR,
  EDIT_CATEGORIE,
  EDIT_CATEGORIE_ERROR,
  DELETE_CATEGORIE,
  DELETE_CATEGORIE_ERROR,
  GET_CATEGORIE,
  GET_CATEGORIE_ERROR,
  CLEAR
} from "./types";
import axios from "axios";
import { headers } from "./../components/ultils/hearders";
import { errors } from "./../components/ultils/errors";
import { ToastMessage } from "./../components/layout/tost";

export const categoriesList = () => async dispatch => {
  try {
    const res = await axios.get("/api/admin/categories", headers);
    dispatch({
      type: CATEGORIES,
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

export const addCategory = data => async dispatch => {
  try {
    const res = await axios.post("/api/admin/categorie/create", data, headers);
    if (res.status === 200) {
      dispatch({
        type: ADD_CATEGORIE,
        payload: res.data
      });
      ToastMessage("Categorie enregistré avec succès", "success");
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "error");
    }
  } catch (error) {
    const err = errors(error);
    dispatch({
      type: ADD_CATEGORIE_ERROR,
      payload: err
    });
  }
};

export const editCategory = (data, categorie) => async dispatch => {
  try {
    const res = await axios.patch(
      `/api/admin/categorie/edit/${categorie}`,
      data,
      headers
    );
    if (res.status === 200) {
      dispatch({
        type: EDIT_CATEGORIE,
        payload: res.data
      });
      ToastMessage("Categorie modifié avec succès", "success");
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "error");
    }
  } catch (error) {
    const err = errors(error);

    dispatch({
      type: EDIT_CATEGORIE_ERROR,
      payload: err
    });
  }
};

export const deleteCategory = categorie => async dispatch => {
  try {
    const res = await axios.delete(
      `/api/admin/categorie/delete/${categorie}`,
      headers
    );
    if (res.status === 200) {
      dispatch({
        type: DELETE_CATEGORIE,
        payload: res.data
      });
      ToastMessage("Categorie supprimé avec succès", "success");
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "error");
    }
  } catch (error) {
    const err = errors(error);
    ToastMessage(err, "error");
    // dispatch({
    //   type: DELETE_CATEGORIE_ERROR,
    //   payload: err
    // });
  }
};

export const getCategory = categorie => async dispatch => {
  try {
    const res = await axios.delete(
      `/api/admin/categorie/show/${categorie}`,
      headers
    );
    if (res.status === 200) {
      dispatch({
        type: GET_CATEGORIE,
        payload: res.data
      });
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "error");
    }
  } catch (error) {
    const err = errors(error);
    dispatch({
      type: GET_CATEGORIE_ERROR,
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
