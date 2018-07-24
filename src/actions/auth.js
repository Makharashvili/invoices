import * as actionTypes from '../actionTypes'

export const registerUser = ({ username, email }, meta) => ({
  type: actionTypes.REGISTER_USER,
  payload: {
    username,
    email,
  },
  meta,
})

export const userRegistered = () => ({
  type: actionTypes.USER_REGISTERED
})

export const registrationFailed = () => ({
  type: actionTypes.REGISTRATION_FAILED
})

export const userAuth = ({ username }, meta) => ({
  type: actionTypes.AUTH,
  payload: { username },
  meta,
})

export const userAuthed = data => ({
  type: actionTypes.AUTH_SUCCESS,
  payload: { data }
})

export const userAuthFailed = error => ({
  type: actionTypes.AUTH_FAILED,
  payload: { error }
})

export const userLogout = () => ({
  type: actionTypes.LOGOUT,
})
