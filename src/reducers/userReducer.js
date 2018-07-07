import * as actions from '../actionTypes'

const initialState = {
  loading: false,
}

const userReducer = (state = initialState, action) => {
  switch(action.type) {
    case actions.REGISTER_USER:
      return {
        ...state,
        loading: true
      }

    case actions.USER_REGISTERED:
    case actions.REGISTRATION_FAILED:
      return {
        ...state,
        loading: false
      }

    default:
      return state
  }
}

export default userReducer
