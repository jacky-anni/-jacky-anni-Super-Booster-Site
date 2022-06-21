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
} from "./types";
import axios from "axios";
import { headers } from "./../components/ultils/hearders";
import { errors } from "./../components/ultils/errors";
import { ToastMessage } from "./../components/layout/tost";

export const quizList = (formation, module) => async dispatch => {
  try {
    const res = await axios.get(
      `/api/admin/quizzes/${formation}/${module}`,
      headers
    );
    dispatch({
      type: QUIZZES,
      payload: res.data
    });
  } catch (error) {
    const err = errors(error);
    dispatch({
      type: QUIZZES_ERROR,
      payload: err
    });
  }
};

export const addQuiz = (quiz, formation, module) => async dispatch => {
  try {
    const res = await axios.post(
      `/api/admin/quiz/create/${formation}/${module}`,
      quiz,
      headers
    );
    if (res.status === 200) {
      dispatch({
        type: ADD_QUIZ,
        payload: res.data
      });
      ToastMessage("Quiz enregistré avec succès", "success");
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "error");
    }
  } catch (error) {
    const err = errors(error);
    // ToastMessage(err, "error");
    dispatch({
      type: ADD_QUIZ_ERROR,
      payload: err
    });
  }
};

// edit quiz
export const editQuiz = (quiz, formation, module) => async dispatch => {
  try {
    // avoir les domnnes
    const res = await axios.put(
      `/api/admin/quiz/edit/${formation}/${module}`,
      quiz,
      headers
    );
    if (res.status === 200) {
      dispatch({
        type: EDIT_QUIZ,
        payload: res.data
      });
      ToastMessage("Quiz modifié avec succès", "success");
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "error");
    }
  } catch (error) {
    const err = errors(error);
    // ToastMessage(err, "error");
    dispatch({
      type: EDIT_QUIZ_ERROR,
      payload: err
    });
  }
};

// delete quiz
// edit quiz
export const deleteQuiz = (quiz, formation) => async dispatch => {
  try {
    // avoir les domnnes
    const res = await axios.delete(
      `/api/admin/quiz/delete/${quiz}/${formation}`,
      headers
    );
    if (res.status === 200) {
      dispatch({
        type: DELETE_QUIZ,
        payload: res.data
      });
      ToastMessage("Quiz supprimé avec succès", "success");
    } else {
      ToastMessage("Un problème s'est rencontré, reessayer", "error");
    }
  } catch (error) {
    const err = errors(error);
    ToastMessage(err, "error");
  }
};

export const clear = () => {
  return {
    type: CLEAR
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
