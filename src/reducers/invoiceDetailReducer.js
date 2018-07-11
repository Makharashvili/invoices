import * as actionTypes  from '../actionTypes'

const initialState = {
  loading: false,
  fetching: true,
  items: [],
  error: null
}

const invoiceDetailReducer = (state = initialState, action) => {
  switch(action.type){

    case actionTypes.CREATE_INVOICE_DETAIL:
    return{
      ...state,
      loading: true,
    }

    case actionTypes.INVOICE_DETAIL_CREATED:
    case actionTypes.CREATE_INVOICE_DETAIL_FAILED:
      return{
        ...state,
        loading: false,
      }
    
    case actionTypes.USER_INVOICE_DETAILS_FETCHED:
      return {
        ...state,
        fetching: false,
        items: action.payload.invoiceDetails,
      }

    case actionTypes.USER_INVOICE_DETAILS_FETCH_FAILED:
      return {
        ...state,
        fetching: false,
        error: action.payload.error,
      }

    case actionTypes.USER_INVOICE_DETAIL_GET_SUCCESS:
      return{
        ...state,
        details: action.payload.item 
      }

    case actionTypes.USER_INVOICE_DETAIL_EDIT_SAVE:
      return{
        ...state,
        error: action.payload.error
      }

    default:
      return state
  }
}

export default invoiceDetailReducer
