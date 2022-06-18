import {
  SET_LOADING,
  GET_PROFILE,
  GET_PROFILE_ERROR,
  GET_PHOTO,
  CHANGE_PHOTO,
  GET_INFOS_PROFILE,
  GET_INFOS_PROFILE_ERROR,
  CREATE_PROFILE,
  CREATE_PROFILE_ERROR,
  EDIT_PASSWORD,
  EDIT_PASSWORD_ERROR,
  ADD_BIOGRAPHIE,
  ADD_BIOGRAPHIE_ERROR,
  CLEAR
} from "./../actions/types";
import cookie from "react-cookies";
import { ToastMessage } from "./../components/layout/tost";

const initialState = {
  loading: true,
  errors: null,
  profile: null,
  profileInfo: null,
  photo: null,
  validate: false,
  editPasswordStatus: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    // get profile
    case GET_PROFILE:
      return {
        ...state,
        loading: false,
        profile: action.payload,
        errors: null,
        profileInfo: state.profileInfo,
        photo: null,
        validate: false
      };

    case CHANGE_PHOTO:
      return {
        ...state,
        loading: false,
        photo: action.payload,
        errors: null,
        profileInfo: state.profileInfo,
        validate: false
      };
      break;

    case GET_PHOTO:
      return {
        ...state,
        loading: false,
        photo: action.payload,
        errors: null,
        profileInfo: state.profileInfo,
        validate: false
      };

    case GET_INFOS_PROFILE:
      return {
        ...state,
        loading: false,
        profileInfo: action.payload,
        errors: null,
        photo: state.photo,
        profile: state.profile,
        validate: false
      };

    case CREATE_PROFILE:
      return {
        ...state,
        loading: false,
        validate: true,
        profileInfo: action.payload
      };

    case ADD_BIOGRAPHIE:
      return {
        ...state,
        loading: false,
        validate: true,
        profileInfo: action.payload
      };

    case EDIT_PASSWORD:
      return {
        ...state,
        loading: false,
        editPasswordStatus: true
      };

    // ===========================================================================================
    case EDIT_PASSWORD_ERROR:
      return {
        ...state,
        loading: false,
        validate: false,
        errors: action.payload
      };

    case GET_INFOS_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case CREATE_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        validate: false,
        errors: action.payload
      };

    case ADD_BIOGRAPHIE_ERROR:
      return {
        ...state,
        loading: false,
        validate: false,
        errors: action.payload
      };

    // get profile error
    case GET_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    // clear
    case CLEAR:
      return {
        ...state,
        validate: false,
        errors: null,
        editPasswordStatus: false
      };

    default:
      return state;
      break;
  }
};
