import { all, call } from "redux-saga/effects";

import { loginSagas } from "./login/login.sagas";

export default function* rootSaga() {
  yield all([call(loginSagas)]);
}
