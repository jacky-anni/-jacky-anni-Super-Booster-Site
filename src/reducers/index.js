import { combineReducers } from "redux";
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import categoryReducer from "./categoryReducer";
export default combineReducers({
  user: userReducer,
  profile: profileReducer,
  category: categoryReducer
});
