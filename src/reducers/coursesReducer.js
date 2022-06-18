import {
  SET_LOADING,
  COURSES,
  COURSES_ERROR,
  SEARCH_COURSES,
  CLEAR_FILTER,
  ADD_COURSE,
  ADD_COURSE_ERROR,
  GET_COURSE,
  GET_COURSE_ERROR,
  ADD_DESCRIPTION,
  ADD_DESCRIPTION_ERROR,
  ACTIVE_COURSE,
  DISABLE_COURSE,
  DELETE_COURSE,
  CHANGE_PHOTO_COURSE,
  CLEAR
} from "./../actions/types";
import cookie from "react-cookies";
import { ToastMessage } from "./../components/layout/tost";

const initialState = {
  loading: true,
  validate: false,
  course: null,
  courses: [],
  author: null,
  photo: null,
  descriptionValidate: false,
  filtered: null,
  errors: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // add categorie

    case COURSES:
      return {
        ...state,
        courses: action.payload,
        validate: false,
        loading: false,
        errors: null,
        photo: null
      };

    case GET_COURSE:
      return {
        ...state,
        course: action.payload.data,
        photo: action.payload.photo,
        loading: false
      };

    case SEARCH_COURSES:
      return {
        ...state,
        loading: false,
        filtered: state.courses.filter(course => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return (
            course.titre.match(regex) ||
            course.langue.match(regex) ||
            course.duree.match(regex)
          );
        })
      };

    case CHANGE_PHOTO_COURSE:
      return {
        ...state,
        loading: false,
        photo: action.payload,
        errors: null,
        validate: false
      };
      break;

    case ADD_COURSE:
      return {
        ...state,
        course: action.payload,
        validate: true,
        loading: false,
        errors: null
      };

    case ADD_DESCRIPTION:
      return {
        ...state,
        course: action.payload,
        descriptionValidate: true,
        loading: false,
        errors: null
      };

    case ACTIVE_COURSE:
      return {
        ...state,
        courses: state.courses.map(course =>
          course.id === action.payload.id ? action.payload : course
        ),
        loading: false,
        errors: null
      };

    case DISABLE_COURSE:
      return {
        ...state,
        courses: state.courses.map(course =>
          course.id === action.payload.id ? action.payload : course
        ),
        loading: false,
        errors: null
      };

    // delete formation
    case DELETE_COURSE:
      return {
        ...state,
        courses: state.courses.filter(
          course => course.id !== action.payload.id
        ),
        loading: false
      };

    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
        loading: false
      };

    //===================================================================

    case COURSES_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case GET_COURSE_ERROR:
      return {
        ...state,
        loading: false,
        errors: "404"
      };

    case ADD_COURSE_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case ADD_DESCRIPTION_ERROR:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };

    case CLEAR:
      return {
        ...state,
        loading: false,
        validate: false,
        errors: null,
        descriptionValidate: false,
        photo: null
        // course: null
      };

    default:
      return state;
      break;
  }
};
