import * as actionTypes from '../actionTypes'

export const showNotification = ({ message }) => ({
  type: actionTypes.SHOW_NOTIFICATION,
  payload: { message },
})

export const hideNotification = () => ({
  type: actionTypes.HIDE_NOTIFICATIONS,
})
