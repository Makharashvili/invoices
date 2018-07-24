import * as actionTypes  from '../actionTypes'

const initialState = {
  loading: false,
  fetching: true,
  items: [],
  details: {},
  error: null,
  page: 1,
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
        items: action.payload.keepOldData ? state.items.concat(action.payload.invoices) : action.payload.invoices,
        page: action.payload.keepOldData ? state.page + 1 : state.page,
      }

    case actionTypes.USER_INVOICES_FETCH_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
      }

    case actionTypes.USER_INVOICE_GET_SUCCESS:
      return{
        ...state,
        details: action.payload.item 
      }

    case actionTypes.USER_INVOICE_EDIT_SAVE:
      return{
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default invoiceReducer
