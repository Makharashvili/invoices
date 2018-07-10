import { delay } from 'redux-saga'
import { takeEvery, call, put } from 'redux-saga/effects'
import axios from 'axios'

import * as actionTypes from '../actionTypes'
import * as actions from '../actions/invoices'

function* createInvoice(action) {
  try {
    const params = {
      ...action.payload,
      userId: '5b40df1cf5906f2cc011dd46',
    }

    const { data } = yield call(axios.post, 'http://localhost:7070/invoices/create', params)
    if(data.success){
      yield put(actions.invoiceCreated())
    }
  } catch(error) {
    yield put(actions.invoiceCreatedFailed())
    console.log(error)
  }
}

export function* createInvoiceWatcher() {
  yield takeEvery(actionTypes.CREATE_INVOICE, createInvoice)
}

function* fetchUserInvoices(action) {
  try {
    yield call(delay, 1000)
    const { data } = yield call(axios.get, `http://localhost:7070/users/${action.payload.userId}/invoices`)
  
    if (data.success) {
      yield put(actions.userInvoicesFetched(data.items))
    }
  } catch (error) {
    yield put(actions.userInvoiceFetchFailed(error))
  }
}

export function* fetchUserInvoicesWatcher() {
  yield takeEvery(actionTypes.FETCH_USER_INVOICES, fetchUserInvoices)
}
