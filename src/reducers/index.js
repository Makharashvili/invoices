import { combineReducers } from 'redux'

import authReducer from './userReducer'
import notificationsReducer from './notificationsReducer'
import invoiceReducer from './invoiceReducer';

export default combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
  invoices: invoiceReducer,
})