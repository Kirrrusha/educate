import { all, call, put, takeEvery } from 'redux-saga/effects';
import { API_HTTP } from '../../../configs/environment';
import {ActionTypesStatuses, fetchStatusesFailure, fetchStatusesSuccess} from './index';
import {createRequest} from '../../rootSagas';

export function* fetchStatusesWorker() {
  const request = {
    method: 'get',
    url: `${API_HTTP}/statuses`
  };

  try {
    const response = yield call(createRequest, request);
    yield put(fetchStatusesSuccess(response));
  } catch (e) {
    yield put(fetchStatusesFailure(e));
  }
}

export function* watchStatusesActionsSaga() {
  yield all([
    takeEvery(ActionTypesStatuses.FETCH_STATUSES_REQUEST, fetchStatusesWorker)
  ]);
}
