import * as actionTypes from '../actionTypes'

const initialState = {
  open: false,
  message: '',
}

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SHOW_NOTIFICATION:
      return {
        open: true,
        message: action.payload.message,
      }

    case actionTypes.HIDE_NOTIFICATIONS:
      return initialState

    default:
      return state
  }
}

export default notifications
