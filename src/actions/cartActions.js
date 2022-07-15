import {
  SET_LOADING,
  CART_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM,
  GET_CART,
  CLEAR_CART
} from "./types";
import axios from "axios";
import { headers } from "./../components/ultils/hearders";
import { errors } from "./../components/ultils/errors";
import { ToastMessage } from "./../components/layout/tost";

export const getCart = () => async dispatch => {
  try {
    // const items = JSON.parse(localStorage.getItem("react-use-cart-course"));
    // if (item) {
    //   count = items.totalItems + 1;
    // } else {
    //   count = items.totalItems - 1;
    // }
    dispatch({
      type: GET_CART
    });
  } catch (error) {
    console.log(error.response);
  }
};

export const addToCart = item => async dispatch => {
  try {
    dispatch({
      type: ADD_ITEM,
      payload: item
    });
    ToastMessage("Cours ajouté au panier", "success");
  } catch (error) {
    console.log(error.response);
  }
};

export const removeToCart = item => async dispatch => {
  try {
    dispatch({
      type: REMOVE_ITEM,
      payload: item
    });
    ToastMessage("Cours retiré au panier", "success");
  } catch (error) {
    console.log(error.response);
  }
};

export const clear = () => {
  return {
    type: CLEAR_CART
  };
};
