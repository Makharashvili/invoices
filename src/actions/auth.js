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
