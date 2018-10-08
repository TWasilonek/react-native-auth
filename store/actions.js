import * as types from './actionTypes';

export const signUp = () => ({
  type: types.SIGN_UP
});

export const signUpSuccess = (user) => ({
  type: types.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = (err) => ({
  type: types.SIGN_UP_FAILURE,
  error: err,
});

export const logIn = () => ({
  type: types.LOG_IN,
});

export const logOut = () => ({
  type: types.LOG_OUT,
});

export const logInSuccess = (user) => ({
  type: types.LOG_IN_SUCCESS,
  payload: user,
});

export const logInFailure = (err) => ({
  type: types.LOG_IN_FAILURE,
  error: err,
});
