import LoginActionTypes from "./login.types";

export const registerUserStart = (userCredentials) => ({
  type: LoginActionTypes.REGISTER_USER_START,
  payload: userCredentials,
});

export const registerUserSuccess = (user) => ({
  type: LoginActionTypes.REGISTER_USER_SUCCESS,
  payload: user,
});

export const registerUserError = (message) => ({
  type: LoginActionTypes.REGISTER_USER_ERROR,
  payload: message,
});

export const loginUserStart = (userCredentials) => ({
  type: LoginActionTypes.LOGIN_USER_START,
  payload: userCredentials,
});

export const loginUserSuccess = (user) => ({
  type: LoginActionTypes.LOGIN_USER_SUCCESS,
  payload: user,
});

export const loginUserError = (message) => ({
  type: LoginActionTypes.LOGIN_USER_ERROR,
  payload: message,
});

export const clearUser = () => ({
  type: LoginActionTypes.CLEAR_USER,
});
