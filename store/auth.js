import * as types from './actionTypes';

const initialState = {
  user: null,
  isAuthenticating: false,
  loginError: false,
  signInError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
      return {
        ...state,
        isAuthenticating: true,
      }
    case types.LOG_IN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        user: { ...action.payload },
      }
    case types.LOG_IN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        signInError: action.error,
      }
    case types.SIGN_UP:
      return {
        ...state,
        isAuthenticating: true,
      }
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        user: { ...action.payload },
      }
    case types.SIGN_UP_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        loginError: action.error,
      }
    default:
      return state;
  }
}
