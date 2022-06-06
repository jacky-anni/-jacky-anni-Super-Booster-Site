import { combineReducers } from "redux";
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import categoryReducer from "./categoryReducer";
import coursesReducer from "./coursesReducer";
export default combineReducers({
  user: userReducer,
  profile: profileReducer,
  category: categoryReducer,
  course: coursesReducer
});
