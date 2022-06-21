import { combineReducers } from "redux";
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import categoryReducer from "./categoryReducer";
import coursesReducer from "./coursesReducer";
import modulesReducer from "./modulesReducer";
import quizesReducer from "./quizzesReducer";
export default combineReducers({
  user: userReducer,
  profile: profileReducer,
  category: categoryReducer,
  course: coursesReducer,
  module: modulesReducer,
  quiz: quizesReducer
});
