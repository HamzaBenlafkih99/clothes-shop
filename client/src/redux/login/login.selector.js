import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

export const selectLoginErrorMessage = createSelector(
  [selectUser],
  (user) => user.errorMessage
);

export const selectRegisterErrorMessage = createSelector(
  [selectUser],
  (user) => user.errorMessage
);
