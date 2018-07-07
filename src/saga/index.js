import { all } from 'redux-saga/effects'

import { registerUserWatcher } from './auth'

export default function* rootSaga () {
  yield all([
    registerUserWatcher(),
  ])
}
