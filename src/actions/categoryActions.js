import {
  SET_LOADING,
  CATEGORIES,
  CATEGORIES_ERROR,
  ADD_CATEGORIE,
  ADD_CATEGORIE_ERROR,
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
    dispatch({
      type: CATEGORIES_ERROR,
      payload: error
    });
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
