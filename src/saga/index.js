import { all } from 'redux-saga/effects'

import { registerUserWatcher } from './auth'
import {
  createInvoiceWatcher,
  fetchUserInvoicesWatcher, 
  getUserInvoiceWatcher, 
  saveUserInvoiceWatcher, 
  deleteUserInvoiceWatcher, 
  createInvoiceDetailWatcher,
  fetchUserInvoiceDetailsWatcher,
  deleteUserInvoiceDetailWatcher,
  getUserInvoiceDetailWatcher,
  saveUserInvoiceDetailWatcher,
} from './invoices'

export default function* rootSaga () {
  yield all([
    registerUserWatcher(),
    createInvoiceWatcher(),
    fetchUserInvoicesWatcher(),
    deleteUserInvoiceWatcher(),
    getUserInvoiceWatcher(),
    saveUserInvoiceWatcher(),
    createInvoiceDetailWatcher(),
    fetchUserInvoiceDetailsWatcher(),
    deleteUserInvoiceDetailWatcher(),
    getUserInvoiceDetailWatcher(),
    saveUserInvoiceDetailWatcher(),
  ])
}
