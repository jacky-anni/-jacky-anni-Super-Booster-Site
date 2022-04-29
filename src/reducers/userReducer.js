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
  ADD_USER_ERROR
} from "./../actions/types";
import cookie from "react-cookies";
const initialState = {
  users: [],
  user: null,
  user_: null,
  loading: true,
  errors: null,
  filtered: null,
  isAuthentificated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Load user
    case LOAD_USER:
      return {
        ...state,
        user: action.payload,
        isAuthentificated: true,
        loading: false
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
        loading: false
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
      cookie.save("add_user", true);
      return {
        ...state,
        users: [...state.users, action.payload],
        user_: action.payload
      };

    case ADD_USER_ERROR:
      return {
        ...state,
        errors: action.payload
      };

    default:
      return state;
      break;
  }
};
