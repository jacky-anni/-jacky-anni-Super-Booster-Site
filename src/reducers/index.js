import { combineReducers } from "redux";
import categoryReducer from "./categoryReducer";
import coursesReducer from "./coursesReducer";
import cartReducer from "./cartReducer";
export default combineReducers({
  category: categoryReducer,
  course: coursesReducer,
  cart: cartReducer
});
