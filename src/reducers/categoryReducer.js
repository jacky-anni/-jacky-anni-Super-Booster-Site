import {
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
} from "./../actions/types";
import cookie from "react-cookies";
import { ToastMessage } from "./../components/layout/tost";

const initialState = {
  loading: true,
  validate: false,
  categorie: null,
  categories: [],
  categorieSelect: null,
  edit: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    // add categorie

    case CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        validate: false,
        loading: false,
        errors: null
      };

    case ADD_CATEGORIE:
      return {
        ...state,
        validate: false,
        categories: [...state.categories, action.payload],
        categorie: action.payload,
        validate: true,
        loading: false,
        errors: null
      };

    case EDIT_CATEGORIE:
      return {
        ...state,
        categories: state.categories.map(categorie =>
          categorie.id === action.payload.id ? action.payload : categorie
        ),
        loading: false,
        edit: true
      };

    case DELETE_CATEGORIE:
      return {
        ...state,
        categories: state.categories.filter(
          categorie => categorie.id !== action.payload.id
        ),
        errors: null,
        loading: false
      };

    case GET_CATEGORIE:
      return {
        ...state,
        categorieSelect: action.payload,
        errors: null,
        loading: false
      };

    // clear
    case CLEAR:
      return {
        ...state,
        validate: false,
        loading: false,
        errors: null,
        edit: false
      };

    //===================================================================
    case GET_CATEGORIE_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case CATEGORIES_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    // ERRORS
    case ADD_CATEGORIE_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case EDIT_CATEGORIE_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload,
        validate: false
      };

    default:
      return state;
      break;
  }
};
