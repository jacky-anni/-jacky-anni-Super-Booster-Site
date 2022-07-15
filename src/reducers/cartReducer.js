import {
  CART_ITEMS,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM,
  GET_CART,
  CLEAR_CART
} from "./../actions/types";
import cookie from "react-cookies";
import { ToastMessage } from "./../components/layout/tost";

const myItems = JSON.parse(localStorage.getItem("react-use-cart-course"));

const initialState = {
  loadingCart: true,
  addSuccess: false,
  removeSuccess: false,
  items: myItems ? myItems.items : [],
  errorsCart: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // add categorie

    case GET_CART:
      return {
        ...state,
        items: state.items
        // totalItems: action.payload.totalItems
        // isEmpty: action.payload.isEmpty,
        // loadingCart: false,
        // errorsCart: null
      };

    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload],
        addSuccess: true
      };

    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        removeSuccess: true
      };

    case CLEAR_CART:
      return {
        ...state,
        loadingCart: false,
        addSuccess: false,
        removeSuccess: false,
        errorsCart: null
      };

    //===================================================================

    default:
      return state;
      break;
  }
};
