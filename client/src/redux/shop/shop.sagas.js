import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopeActionTypes from "./shop.types";
import api from "../../api/api";

import {
  getCollectionItemsError,
  getCollectionItemsSuccess,
} from "./shop.actions";

export function* getCollectionItems() {
  try {
    const config = {
      method: "get",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = yield call(api, "/shop", config);
    if (data.status === "success") {
      yield put(getCollectionItemsSuccess(data.collectionItems));
    } else {
      yield put(getCollectionItemsError(data.message));
    }
  } catch (error) {
    console.log("collection item saga error is " + error);
  }
}

export function* onCollectionItems() {
  yield takeLatest(ShopeActionTypes.GET_COLLECTION_START, getCollectionItems);
}

export function* shopSagas() {
  yield all([call(onCollectionItems)]);
}
