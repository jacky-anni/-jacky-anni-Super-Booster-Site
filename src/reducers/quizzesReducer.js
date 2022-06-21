import {
  SET_LOADING,
  QUIZZES,
  QUIZZES_ERROR,
  ADD_QUIZ_ERROR,
  ADD_QUIZ,
  EDIT_QUIZ,
  EDIT_QUIZ_ERROR,
  DELETE_QUIZ,
  CLEAR
} from "./../actions/types";
import cookie from "react-cookies";
import { ToastMessage } from "./../components/layout/tost";

const initialState = {
  loadingQuiz: true,
  validateQuiz: false,
  quiz: null,
  quizzes: [],
  editQuizValidate: false,
  errorsQuiz: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // add categorie

    case QUIZZES:
      return {
        ...state,
        quizzes: action.payload,
        validateQuiz: false,
        loadingQuiz: false,
        errorsQuiz: null
      };

    case ADD_QUIZ:
      return {
        ...state,
        quizzes: [...state.quizzes, action.payload],
        quiz: action.payload,
        validateQuiz: true,
        loadingQuiz: false
      };

    case EDIT_QUIZ:
      return {
        ...state,
        quizzes: state.quizzes.map(quiz =>
          quiz.id === action.payload.id ? action.payload : quiz
        ),
        editQuizValidate: true,
        loadingQuiz: false
      };

    case DELETE_QUIZ:
      return {
        ...state,
        quizzes: state.quizzes.filter(quiz => quiz.id !== action.payload.id),
        loadingQuiz: false,
        loadingQuiz: false
      };

    case CLEAR:
      return {
        ...state,
        errorsQuiz: null,
        validateQuiz: false,
        loadingQuiz: false,
        editQuizValidate: false
      };

    //===========================================================================================
    // ERRORS
    case ADD_QUIZ_ERROR:
      return {
        ...state,
        errorsQuiz: action.payload,
        quiz: null,
        validateQuiz: false
      };

    case EDIT_QUIZ_ERROR:
      return {
        ...state,
        errorsQuiz: action.payload,
        quiz: null,
        editQuizValidate: false
      };

    default:
      return state;
      break;
  }
};
