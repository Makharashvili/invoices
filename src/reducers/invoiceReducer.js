import * as actionTypes  from '../actionTypes'

const initialState = {
  loading: false,
  fetching: true,
  items: [],
  error: null
}

const invoiceReducer = (state = initialState, action) => {
  switch(action.type){
    case actionTypes.CREATE_INVOICE:
      return{
        ...state,
        loading: true,
      }

    case actionTypes.INVOICE_CREATED:
    case actionTypes.CREATE_INVOICE_FAILED:
      return{
        ...state,
        loading: false,
      }

    case actionTypes.USER_INVOICES_FETCHED:
      return {
        ...state,
        fetching: false,
        items: action.payload.invoices,
      }

    case actionTypes.USER_INVOICES_FETCH_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
      }

    default:
      return state
  }
}

export default invoiceReducer
