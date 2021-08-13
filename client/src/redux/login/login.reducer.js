import LoginActionTypes from "./login.types";

const INITIAL_STATE = {
  currentUser: null,
  errorMessage: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LoginActionTypes.LOGIN_USER_SUCCESS:
    case LoginActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        errorMessage: null,
      };
    case LoginActionTypes.LOGIN_USER_ERROR:
    case LoginActionTypes.REGISTER_USER_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case LoginActionTypes.CLEAR_USER:
      return {
        ...state,
        currentUser: null,
        errorMessage: null,
      };
    default:
      return state;
  }
};

export default userReducer;
