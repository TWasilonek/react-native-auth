import { put, takeEvery, all, call } from 'redux-saga/effects';
import * as types from './actionTypes';
import * as actions from './actions';

import * as api from '../services/api';
import * as storage from '../services/persistentStorage';

function* loginSaga(action) {
  try {
    const user = yield call(api.login, {...action.payload});
    yield call(storage.storeData, 'user', JSON.stringify(user));
    yield put(actions.loginSuccess(user));
  } catch (error) {
    yield put(acions.logniFailure(error));
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

