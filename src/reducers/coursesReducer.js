import {
  SET_loadingCourse,
  COURSES,
  COURSES_ERROR,
  GET_COURSE,
  GET_COURSE_ERROR,
  CLEAR
} from "./../actions/types";
import cookie from "react-cookies";
import { ToastMessage } from "./../components/layout/tost";

const initialState = {
  loadingCourse: true,
  validate: false,
  course: null,
  courses: [],
  descriptionValidate: false,
  filtered: null,
  errorsCourse: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // add categorie

    case COURSES:
      return {
        ...state,
        courses: action.payload,
        validate: false,
        loadingCourse: false,
        errorsCourse: null
      };

    case GET_COURSE:
      return {
        ...state,
        course: action.payload,
        validate: false,
        loadingCourse: false,
        errorsCourse: null
      };

    // case CLEAR:
    //   return {
    //     ...state,
    //     course: null,
    //     loadingCourse: true,
    //     errorsCourse: null
    //   };

    //===================================================================

    case COURSES_ERROR:
      return {
        ...state,
        loadingCourse: false,
        errorsCourse: action.payload
      };

    case GET_COURSE_ERROR:
      return {
        ...state,
        loadingCourse: false,
        errorsCourse: action.payload
      };

    default:
      return state;
      break;
  }
};
