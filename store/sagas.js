import { put, takeEvery, all } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';

function* logInSaga() {
  try {
    // TODO: Login logic
    const user = { username: 'Kowalski' };
    yield put(actions.logInSuccess(user));
  } catch (error) {
    yield put(acions.logInFailure(error));
  }
}

function* watchAuthSaga() {
  yield takeEvery(types.LOG_IN, logInSaga);
}

export default function* rootSaga() {
  yield all([
    watchAuthSaga(),
  ]);
}

