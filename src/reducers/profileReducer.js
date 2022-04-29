import {
  SET_LOADING,
  GET_PROFILE,
  GET_PROFILE_ERROR,
  GET_PHOTO
} from "./../actions/types";
import cookie from "react-cookies";
const initialState = {
  loading: true,
  errors: null,
  profile: null,
  photo: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // get profile
    case GET_PROFILE:
      return {
        ...state,
        loading: false,
        profile: action.payload
      };

    case GET_PHOTO:
      return {
        ...state,
        loading: false,
        photo: action.payload
      };

    // get profile error
    case GET_PROFILE_ERROR:
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
