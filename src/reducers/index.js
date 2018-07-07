import { combineReducers } from 'redux'

import authReducer from './userReducer'
import notificationsReducer from './notificationsReducer'

export default combineReducers({
  auth: authReducer,
  notifications: notificationsReducer,
})