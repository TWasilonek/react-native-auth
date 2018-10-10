import * as types from './actionTypes';

export const signUp = ({ email, password }) => ({
  type: types.SIGN_UP,
  payload: {
    email: email,
    password: password
  }
});

export const signUpSuccess = (user) => ({
  type: types.SIGN_UP_SUCCESS,
  payload: user,
});

export const signUpFailure = (err) => ({
  type: types.SIGN_UP_FAILURE,
  error: err,
});

export const login = ({email, password}) => ({
  type: types.LOG_IN,
  payload: {
    email: email,
    password: password
  }
});

export const loginSuccess = (user) => ({
  type: types.LOG_IN_SUCCESS,
  payload: user,
});

export const loginFailure = (err) => ({
  type: types.LOG_IN_FAILURE,
  error: err,
});

export const logout = () => ({
  type: types.LOG_OUT
});

export const logoutSuccess = () => ({
  type: types.LOG_OUT_SUCCESS
});

export const logoutFailure = () => ({
  type: types.LOG_OUT_FAILURE
});

export const storageLogin = (user) => ({
  type: types.STORAGE_LOG_IN,
  payload: { ...user }
});
