import { delay } from 'redux-saga'
import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import makeRequest from '../makeRequest'

import { userRegistered, registrationFailed, userAuthed, userAuthFailed } from '../actions/auth'
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

function* authUser (action) {
  try {
    yield call(delay, 1000)
    const { data } = yield call(axios.post, 'http://localhost:7070/users/auth', action.payload)

    if (data.success) {
      localStorage.setItem('token', data.token)
      yield put(userAuthed(data.userData))

      if (action.meta) action.meta.resolve()
    } else {
      yield put(userAuthFailed(data.error))
    }
  } catch (error) {
    console.log(error)
  }
}

export function* authUserWatcher () {
  yield takeEvery(actionTypes.AUTH, authUser)
}

export function* checkToken () {
  const token = localStorage.getItem('token')

  if (token) {
    const { data } = yield call(makeRequest, 'post', 'http://localhost:7070/users/check-token')

    if (data.success) {
      yield put(userAuthed(data.userData))
    } else {
      localStorage.removeItem('token')
    }
  }
}
