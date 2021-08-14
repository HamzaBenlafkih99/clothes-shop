import ShopeActionTypes from "./shop.types";

export const getCollectionItemsStart = () => ({
  type: ShopeActionTypes.GET_COLLECTION_START,
});

export const getCollectionItemsSuccess = (collectionItems) => ({
  type: ShopeActionTypes.GET_COLLECTION_SUCCESS,
  payload: collectionItems,
});

export const getCollectionItemsError = (errorMessage) => ({
  type: ShopeActionTypes.GET_COLLECTION_ERROR,
  payload: errorMessage,
});
