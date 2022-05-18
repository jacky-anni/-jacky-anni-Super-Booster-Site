import {
  CATEGORIES,
  CATEGORIES_ERROR,
  ADD_CATEGORIE,
  ADD_CATEGORIE_ERROR,
  CLEAR
} from "./../actions/types";
import cookie from "react-cookies";
import { ToastMessage } from "./../components/layout/tost";

const initialState = {
  loading: true,
  validate: false,
  categorie: null,
  categories: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    // add categorie

    case CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        validate: false,
        errors: null
      };

    case ADD_CATEGORIE:
      return {
        ...state,
        validate: false,
        categories: [...state.categories, action.payload],
        categorie: action.payload,
        validate: true,
        errors: null
      };

    // clear
    case CLEAR:
      return {
        ...state,
        validate: false,
        errors: null
      };

    //===================================================================
    // ERRORS
    case ADD_CATEGORIE_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    default:
      return state;
      break;
  }
};
