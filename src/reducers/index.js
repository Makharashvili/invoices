import { combineReducers } from 'redux'

import { LOGOUT } from '../actionTypes'

import authReducer from './userReducer'
import notificationsReducer from './notificationsReducer'
import invoiceReducer from './invoiceReducer';
import invoiceDetailReducer from './invoiceDetailReducer'

const appReducer = combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
  invoices: invoiceReducer,
  invoiceDetails: invoiceDetailReducer,
})

const rootReducer = (state, action) => {
  if (action.type === LOGOUT) {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
