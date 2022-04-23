import {
  SEARCH_USERS,
  CLEAR_FILTER,
  GET_USERS,
  AUTH_USER,
  SUCCCESS_LOGIN,
  FAIL_LOGIN,
  LOAD_USER,
  ERROR_USER,
  LOGOUT_SUCCESS
} from "./../actions/types";
const initialState = {
  users: [],
  user: null,
  loading: true,
  error: null,
  errors: [],
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

    default:
      return state;
      break;
  }
};
