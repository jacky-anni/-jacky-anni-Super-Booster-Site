import { combineReducers } from "redux";
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
export default combineReducers({
  user: userReducer,
  profile: profileReducer
});
