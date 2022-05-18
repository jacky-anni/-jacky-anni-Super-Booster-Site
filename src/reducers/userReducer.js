import {
  SEARCH_USERS,
  CLEAR_FILTER,
  GET_USERS,
  AUTH_USER,
  SUCCCESS_LOGIN,
  FAIL_LOGIN,
  LOAD_USER,
  ERROR_USER,
  LOGOUT_SUCCESS,
  ADD_USER,
  ADD_USER_SUCCESS,
  EDIT_USER_SUCCESS,
  EDIT_USER_ERROR,
  ADD_USER_ERROR,
  VALIDATE_EMAIL,
  VALIDATE_EMAIL_ERROR,
  ADD_PASSWORD,
  ADD_PASSWORD_ERROR,
  ACTIVE_USER,
  DISABLE_USER,
  DELETE_USER,
  CLEAR,
  GET_PHOTO_USER
} from "./../actions/types";
import cookie from "react-cookies";
const initialState = {
  users: [],
  user: null,
  user_: null,
  loading: true,
  errors: null,
  filtered: null,
  isAuthentificated: false,
  validate: false,
  add_password: false,
  photoUser: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Load user
    case LOAD_USER:
      return {
        ...state,
        user: action.payload.data,
        loading: false,
        photoUser: action.payload.photo,
        isAuthentificated: true
      };

    // login fuser
    case SUCCCESS_LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthentificated: true,
        loading: false
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
        isAuthentificated: true
      };

    case SEARCH_USERS:
      return {
        ...state,
        loading: false,
        filtered: state.users.filter(user => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return user.prenom.match(regex) || user.nom.match(regex);
        })
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };

    //==========================================================================
    case FAIL_LOGIN:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthentificated: false,
        loading: false,
        errors: action.payload
      };

    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuthentificated: false,
        loading: false
      };

    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        user_: action.payload,
        validate: true,
        errors: null
      };

    // edit user
    case EDIT_USER_SUCCESS:
    // active user
    case ACTIVE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
        loading: false,
        validate: true
      };

    // disable user
    case DISABLE_USER:
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.payload.id ? action.payload : user
        ),
        errors: null,
        loading: false
      };

    // disable user
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload.id),
        errors: null,
        loading: false
      };

    case VALIDATE_EMAIL:
      localStorage.setItem("tokenValidation", action.payload.token);
      return {
        ...state,
        validate: true,
        user: action.payload,
        errors: null,
        loading: false
      };

    case VALIDATE_EMAIL:
      localStorage.setItem("tokenValidation", action.payload.token);
      return {
        ...state,
        validate: true,
        user: action.payload,
        errors: null,
        loading: false
      };

    case ADD_PASSWORD:
      localStorage.removeItem("tokenValidation", action.payload.token);
      return {
        ...state,
        validate: true,
        user: action.payload,
        errors: null,
        add_password: true,
        loading: false
      };

    //==============================================================================================================
    case VALIDATE_EMAIL_ERROR:
      return {
        ...state,
        validate: false,
        errors: action.payload,
        loading: false
      };

    case ERROR_USER:
      return {
        ...state,
        validate: false,
        errors: action.payload,
        loading: false
      };

    // addd password
    case ADD_PASSWORD_ERROR:
      return {
        ...state,
        validate: false,
        errors: action.payload,
        loading: false
      };

    case ADD_USER_ERROR:
      return {
        ...state,
        errors: action.payload,
        validate: false
      };

    case EDIT_USER_ERROR:
      return {
        ...state,
        errors: action.payload,
        validate: false
      };

    // clear
    case CLEAR:
      return {
        ...state,
        validate: false,
        errors: null
      };

    default:
      return state;
      break;
  }
};
