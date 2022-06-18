import {
  SET_loadingModule,
  MODULES,
  CREATE_MODULES,
  CREATE_MODULES_ERROR,
  EDIT_MODULES,
  EDIT_MODULES_ERROR,
  DELETE_MODULES,
  SHOW_MODULE,
  SHOW_MODULE_ERROR,
  CLEAR
} from "./../actions/types";
import { ToastMessage } from "./../components/layout/tost";

const initialState = {
  loadingModule: true,
  validate: false,
  modules: null,
  module: null,
  errors: null,
  edit: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // add categorie

    case MODULES:
      return {
        ...state,
        modules: action.payload,
        validate: false,
        loadingModule: false,
        errors: null,
        photo: null
      };

    case SHOW_MODULE:
      return {
        ...state,
        loadingModule: false,
        module: action.payload,
        errors: null,
        photo: null
      };

    case CREATE_MODULES:
      return {
        ...state,
        modules: [...state.modules, action.payload],
        module: action.payload,
        validate: true,
        loadingModule: false,
        errors: null
      };

    case EDIT_MODULES:
      return {
        ...state,
        modules: state.modules.map(module =>
          module.id === action.payload.id ? action.payload : module
        ),
        loadingModule: false,
        edit: true
      };

    case DELETE_MODULES:
      return {
        ...state,
        modules: state.modules.filter(
          module => module.id !== action.payload.id
        ),
        errors: null,
        loadingModule: false
      };

    case CLEAR:
      return {
        ...state,
        loadingModule: false,
        validate: false,
        errors: null,
        edit: false
        // course: null
      };
    //=====================================================================================================
    // ERRRORS
    case CREATE_MODULES_ERROR:
      return {
        ...state,
        validate: false,
        loadingModule: false,
        errors: action.payload
      };

    case SHOW_MODULE_ERROR:
      return {
        ...state,
        loadingModule: false,
        errors: action.payload,
        photo: null
      };

    case EDIT_MODULES_ERROR:
      return {
        ...state,
        validate: false,
        loadingModule: false,
        edit: false,
        errors: action.payload
      };

    default:
      return state;
      break;
  }
};
