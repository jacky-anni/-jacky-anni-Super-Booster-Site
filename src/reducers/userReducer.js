import { SEARCH_USERS, CLEAR_FILTER, GET_USERS } from "./../actions/types";
const initialState = {
  users: [],
  user: null,
  loading: true,
  error: null,
  errors: [],
  filtered: null
};

export default (state = initialState, action) => {
  switch (action.type) {
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
          return user.login.match(regex) || user.type.match(regex);
        })
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };

    default:
      return state;
      break;
  }
};
