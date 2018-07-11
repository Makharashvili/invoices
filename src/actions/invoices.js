import * as actionTypes from '../actionTypes'

export const createInvoice = ({ name, date, description, contactName, address}, meta) => ({
  type: actionTypes.CREATE_INVOICE,
  payload: {
    name,
    date,
    description,
    contactName,
    address,
  },
  meta
})

export const createInvoiceDetail = ({ name, description, quantity, price, total, userId, invoiceId}, meta) =>({
  type: actionTypes.CREATE_INVOICE_DETAIL,
  payload: {
    name,
    description,
    quantity,
    price,
    total,
    userId,
    invoiceId
  },
  meta,
})

export const invoiceCreated = () => ({
  type: actionTypes.INVOICE_CREATED,
})

export const invoiceCreatedFailed = () => ({
  type: actionTypes.CREATE_INVOICE_FAILED,
})

export const invoiceDetailCreated = () => ({
  type: actionTypes.INVOICE_DETAIL_CREATED,
})

export const invoiceDetailCreatedFailed = () => ({
  type: actionTypes.CREATE_INVOICE_DETAIL_FAILED,
})

export const fetchUserInvoices = ({ userId }) => ({
  type: actionTypes.FETCH_USER_INVOICES,
  payload: { userId },
})

export const fetchUserInvoiceDetails = ({ invoiceId }) => ({
  type: actionTypes.FETCH_USER_INVOICE_DETAILS,
  payload: { invoiceId }
})

export const userInvoicesFetched = invoices => ({
  type: actionTypes.USER_INVOICES_FETCHED,
  payload: { invoices }
})

export const userInvoiceDetailsFetched = invoiceDetails => ({
  type: actionTypes.USER_INVOICE_DETAILS_FETCHED,
  payload: { invoiceDetails }
})

export const userInvoiceFetchFailed = error => ({
  type: actionTypes.USER_INVOICES_FETCH_FAILED,
  payload: { error }
})

export const userInvoiceDetailFetchFailed = error => ({
  type: actionTypes.USER_INVOICE_DETAILS_FETCH_FAILED,
  payload: { error }
})

export const userInvoiceDelete = ( {invoiceId}, meta ) => ({
  type: actionTypes.USER_INVOICE_DELETE,
  payload: { invoiceId },
  meta
})

export const userInvoiceDetailDelete = ( {invoiceDetailId}, meta ) => ({
  type: actionTypes.USER_INVOICE_DETAIL_DELETE,
  payload: { invoiceDetailId },
  meta
})

export const getUserInvoice = ( {invoiceId} ) => ({
  type: actionTypes.USER_INVOICE_GET,
  payload: {invoiceId},
})

export const getUserInvoiceDetail = ( {invoiceDetailId} ) => ({
  type: actionTypes.USER_INVOICE_DETAIL_GET,
  payload: {invoiceDetailId},
})

export const getUserInvoiceFetched = ({ item }) => ({
  type: actionTypes.USER_INVOICE_GET_SUCCESS,
  payload: {item},
})

export const getUserInvoiceDetailFetched = ({ item }) => ({
  type: actionTypes.USER_INVOICE_DETAIL_GET_SUCCESS,
  payload: {item},
})

export const saveUserInvoice = ({ name, description, contactName, address, invoiceId }, meta ) => ({
  type: actionTypes.USER_INVOICE_EDIT_SAVE,
  payload: {
    name,
    description,
    contactName,
    address,
    invoiceId
  },
  meta,
}) 

export const saveUserInvoiceDetail = ({ name, description, quantity, price, total, invoiceDetailId }, meta) => ({
  type: actionTypes.USER_INVOICE_DETAIL_EDIT_SAVE,
  payload: {
    name,
    description,
    quantity,
    price,
    total,
    invoiceDetailId
  },
  meta,
})