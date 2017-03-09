import { call, put, takeLatest, fork } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import { callApi } from '../services/api'
import * as ActionTypes from '../actionTypes/diskTypes'
import * as schema from '../actions/schema'

function* fetchDisks() {
  yield put({ type: ActionTypes.disk.DISK_GET_REQUEST })
  try {
    console.info('开始请求')
    // const json = yield call(callApi, 'getFixedData', 'GET')
    const json = yield call(callApi, 'signup', 'GET')
    const result = normalize(json, schema.arrayOfDisks)
    yield put({ type: ActionTypes.disk.DISK_GET_SUCCEEDED, ...{ result } })
  } catch (e) {
    yield put({ type: ActionTypes.disk.DISK_GET_FAILED, message: e.message })
  }
}

function* fetchWatcher() {
  yield takeLatest(ActionTypes.disk.DISK_GET_REQUESTED, fetchDisks)
}

function* diskSaga() {
  const sagas = []
  sagas.push(fork(fetchWatcher))
  yield sagas
}

export default diskSaga
