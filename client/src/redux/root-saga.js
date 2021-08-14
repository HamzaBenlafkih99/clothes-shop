import { all, call } from "redux-saga/effects";

import { loginSagas } from "./login/login.sagas";
import { shopSagas } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(loginSagas), call(shopSagas)]);
}
