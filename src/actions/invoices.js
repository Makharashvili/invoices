import * as actionTypes from '../actionTypes'

export const createInvoice = ({ name, date, description, contactName, address}) => ({
  type: actionTypes.CREATE_INVOICE,
  payload: {
    name,
    date,
    description,
    contactName,
    address,
  },
})

export const invoiceCreated = () => ({
  type: actionTypes.INVOICE_CREATED,
})

export const invoiceCreatedFailed = () => ({
  type: actionTypes.CREATE_INVOICE_FAILED,
})

export const fetchUserInvoices = ({ userId }) => ({
  type: actionTypes.FETCH_USER_INVOICES,
  payload: { userId },
})

export const userInvoicesFetched = invoices => ({
  type: actionTypes.USER_INVOICES_FETCHED,
  payload: { invoices }
})

export const userInvoiceFetchFailed = error => ({
  type: actionTypes.USER_INVOICES_FETCH_FAILED,
  payload: { error }
})
