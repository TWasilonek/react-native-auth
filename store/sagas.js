import { put, takeEvery, all, call } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';

import * as api from '../api';

function* loginSaga(action) {
  try {
    const user = yield call(api.login, action.payload);
    yield put(actions.logInSuccess(user));
  } catch (error) {
    yield put(acions.logInFailure(error));
  }
}

function* watchAuthSaga() {
  yield takeEvery(types.LOG_IN, loginSaga);
}

export default function* rootSaga() {
  yield all([
    watchAuthSaga(),
  ]);
}

