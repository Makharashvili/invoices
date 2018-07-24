import { takeEvery, call, put, select } from 'redux-saga/effects'

import makeRequest from '../makeRequest'

import * as actionTypes from '../actionTypes'
import * as actions from '../actions/invoices'

function* createInvoice(action) {
  try {
    const userId = yield select(state => state.auth.data.Id)

    const params = { ...action.payload, userId }

    const { data } = yield call(makeRequest, 'post', 'http://localhost:7070/invoices/create', params)
    if(data.success){
      yield put(actions.invoiceCreated())
      action.meta.resolve()

    }
  } catch(error) {
    yield put(actions.invoiceCreatedFailed())
    console.log(error)
  }
}
export function* createInvoiceWatcher() {
  yield takeEvery(actionTypes.CREATE_INVOICE, createInvoice)
}

function* createInvoiceDetail(action) {
  try {
    const userId = yield select(state => state.auth.data.Id)

    const params = { ...action.payload, userId }

    const { data } = yield call(makeRequest, 'post', `http://localhost:7070/invoices/${action.payload.invoiceId}/details/create`, params)
    if(data.success){
      yield put(actions.invoiceDetailCreated())
      action.meta.resolve()

    }
  } catch(error) {
    yield put(actions.invoiceDetailCreatedFailed())
    console.log(error)
  }
}

export function* createInvoiceDetailWatcher() {
  yield takeEvery(actionTypes.CREATE_INVOICE_DETAIL, createInvoiceDetail)
}

function* fetchUserInvoices(action) {
  try {
    const { data } = yield call(makeRequest, 'get', `http://localhost:7070/users/${action.payload.userId}/invoices?page=${action.payload.page}`)

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

function* fetchUserInvoiceDetails(action) {
  try {
    const { data } = yield call(makeRequest, 'get', `http://localhost:7070/invoices/${action.payload.invoiceId}/details?page=${action.payload.page}`)
    if (data.success) {
      yield put(actions.userInvoiceDetailsFetched(data.items))
    }
  } catch (error) {
    yield put(actions.userInvoiceDetailFetchFailed(error))
  }
}

export function* fetchUserInvoiceDetailsWatcher() {
  yield takeEvery(actionTypes.FETCH_USER_INVOICE_DETAILS, fetchUserInvoiceDetails)
}

function* deleteUserInvoice(action){
  try{
    const { data } = yield call(makeRequest, 'delete', `http://localhost:7070/invoices/${action.payload.invoiceId}/delete`)
    if(data.success){
      action.meta.resolve()
    }
  } catch(error){

  }
}

export function* deleteUserInvoiceWatcher() {
  yield takeEvery(actionTypes.USER_INVOICE_DELETE, deleteUserInvoice)
}

function* deleteUserInvoiceDetail(action){
  try{
    const { data } = yield call(makeRequest, 'delete', `http://localhost:7070/invoices/details/${action.payload.invoiceDetailId}/delete`)
    if(data.success){
      action.meta.resolve()
    }
  } catch(error){

  }
}

export function* deleteUserInvoiceDetailWatcher() {
  yield takeEvery(actionTypes.USER_INVOICE_DETAIL_DELETE, deleteUserInvoiceDetail)
}

function* getUserInvoice(action){
  try{
    const { data } = yield call(makeRequest, 'get', `http://localhost:7070/invoices/${action.payload.invoiceId}`)
    yield put(actions.getUserInvoiceFetched(data))
  } catch(error){

  }
}

export function* getUserInvoiceWatcher() {
  yield takeEvery(actionTypes.USER_INVOICE_GET, getUserInvoice)
}

function* getUserInvoiceDetail(action){
  try{
    const { data } = yield call(makeRequest, 'get', `http://localhost:7070/invoices/detail/${action.payload.invoiceDetailId}`)
    yield put(actions.getUserInvoiceDetailFetched(data))
  } catch(error){

  }
}

export function* getUserInvoiceDetailWatcher() {
  yield takeEvery(actionTypes.USER_INVOICE_DETAIL_GET, getUserInvoiceDetail)
}

function* saveUserInvoice(action){
  const { data } = yield call(makeRequest, 'put', `http://localhost:7070/invoices/${action.payload.invoiceId}/edit`, action)
  if (data.success) {
    action.meta.resolve()
  }
}

export function* saveUserInvoiceWatcher() {
  yield takeEvery(actionTypes.USER_INVOICE_EDIT_SAVE, saveUserInvoice)
}

function* saveUserInvoiceDetail(action){
  const { data } = yield call(makeRequest, 'put', `http://localhost:7070/invoices/details/${action.payload.invoiceDetailId}/edit`, action.payload)
  if (data.success) {
    action.meta.resolve()
  }
}
export function* saveUserInvoiceDetailWatcher() {
  yield takeEvery(actionTypes.USER_INVOICE_DETAIL_EDIT_SAVE, saveUserInvoiceDetail)
}