import { delay } from 'redux-saga'
import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import { userRegistered, registrationFailed } from '../actions/auth'
import { showNotification } from '../actions/notfications'
import * as actionTypes from '../actionTypes'

function* registerUser (action) {
  try {
    yield call(delay, 2000)
    const { data } = yield call(axios.post, 'http://localhost:7070/users/register', action.payload)

    if (data.success) {
      yield put(userRegistered())
      yield put(showNotification({ message: 'user registered' }))
      action.meta.resolve()
    }
  } catch (error) {
    yield put(registrationFailed())
    action.meta.reject(error)
  }
}

export function* registerUserWatcher () {
  yield takeEvery(actionTypes.REGISTER_USER, registerUser)
}
