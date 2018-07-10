import { all } from 'redux-saga/effects'

import { registerUserWatcher } from './auth'
import { createInvoiceWatcher, fetchUserInvoicesWatcher } from './invoices'

export default function* rootSaga () {
  yield all([
    registerUserWatcher(),
    createInvoiceWatcher(),
    fetchUserInvoicesWatcher(),
  ])
}
