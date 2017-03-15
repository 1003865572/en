import { call, put, takeLatest, fork } from 'redux-saga/effects'
import { normalize } from 'normalizr'
import { callApi } from '../services/api'
import * as ActionTypes from '../actionTypes/diskTypes'
import * as schema from '../actions/schema'

function* fetchDisks() {
  yield put({ type: ActionTypes.disk.DISK_GET_REQUEST })
  try {
    const json = yield call(callApi, 'signup', 'GET')
    const result = normalize(json, schema.arrayOfDisks)
    yield put({ type: ActionTypes.disk.DISK_GET_SUCCEEDED, ...{ result } })
  } catch (e) {
    yield put({ type: ActionTypes.disk.DISK_GET_FAILED, message: e.message })
  }
}

function* saveDisk(data) {
  yield put({ type: ActionTypes.disk.DISK_SAVE_REQUEST })
  console.info(data.resolve)
  try {
    console.info('开始执行')
    const json = yield call(callApi, 'insertName', 'POST', data.data)
    const result = normalize(json, schema.arrayOfDisks)
    yield put({ type: ActionTypes.disk.DISK_SAVE_SUCCEEDED, ...{ result } })
    yield data.resolve()
  } catch (e) {
    yield put({ type: ActionTypes.disk.DISK_SAVE_FAILED, message: e.message })
    yield data.reject()
  }
}

function* fetchWatcher() {
  yield takeLatest(ActionTypes.disk.DISK_GET_REQUESTED, fetchDisks)
  yield takeLatest(ActionTypes.disk.DISK_SAVE_REQUESTED, saveDisk)
}

function* diskSaga() {
  const sagas = []
  sagas.push(fork(fetchWatcher))
  yield sagas
}

export default diskSaga
