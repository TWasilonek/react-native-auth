import * as types from './actionTypes';

const initialState = {
  user: null,
  isAuthenticating: false,
  signUpError: false,
  loginError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_IN:
    case types.SIGN_UP:
      return {
        ...state,
        isAuthenticating: true,
      }
    case types.LOG_IN_SUCCESS:
    case types.STORAGE_LOG_IN:
      return {
        ...state,
        isAuthenticating: false,
        loginError: false,
        user: { ...action.payload },
      }
    case types.LOG_IN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        user: null,
        loginError: action.error,
      }
    case types.LOG_OUT_SUCCESS:
      return {
        ...state,
        user: null,
      }
    case types.SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        signUpError: false,
        user: { ...action.payload },
      }
    case types.SIGN_UP_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        user: null,
        signUpError: action.error,
      }
    default:
      return state;
  }
}
