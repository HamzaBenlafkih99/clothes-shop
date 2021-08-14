import ShopeActionTypes from "./shop.types";

const INITIAL_STATE = {
  collections: null,
  errorMessage: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopeActionTypes.GET_COLLECTION_SUCCESS:
      return {
        ...state,
        collections: action.payload,
      };
    case ShopeActionTypes.GET_COLLECTION_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
