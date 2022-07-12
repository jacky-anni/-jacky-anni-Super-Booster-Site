import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import coursesReducer from "./coursesReducer";
export default combineReducers({
  category: categoryReducer,
  course: coursesReducer
});
