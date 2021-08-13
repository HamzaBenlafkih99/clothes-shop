import { takeLatest, call, put, all } from "redux-saga/effects";
import LoginActionTypes from "./login.types";
import api from "../../api/api";

import { registerUserError, registerUserSuccess } from "./login.action";

export function* register({ payload }) {
  try {
    const config = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    const data = yield call(api, "/auth/register", config);
    if (data.status === "success") {
      yield put(registerUserSuccess(data.user));
    } else {
      yield put(registerUserError(data.message));
    }
  } catch (error) {
    console.log("register saga error is " + error);
  }
}

export function* login({ payload }) {
  try {
    const config = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    const data = yield call(api, "/auth/login", config);
    if (data.status === "success") {
      yield put(registerUserSuccess(data.user));
    } else {
      yield put(registerUserError(data.message));
    }
  } catch (error) {
    console.log("register saga error is " + error);
  }
}

export function* onRegister() {
  yield takeLatest(LoginActionTypes.REGISTER_USER_START, register);
}

export function* onLogin() {
  yield takeLatest(LoginActionTypes.LOGIN_USER_START, login);
}

export function* loginSagas() {
  yield all([call(onRegister), call(onLogin)]);
}
