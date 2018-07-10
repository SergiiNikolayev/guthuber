import * as actionTypes from './../actions/actionTypes'

const initialState = {
  items: 0,
  message: [],
  id: '*',
  search: ''
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.RANDOM_EVENT:
      return {
        ...state,
        items: state.items + action.var
      };
    case actionTypes.GET_INFO:
      return {
        ...state,
        items: state.items
      };
    case actionTypes.SEARCH:
      return {
        ...state,
        search: action.whatWeSearch
      };
    case actionTypes.REQUEST_SUCCEDED:
      return {
        ...state,
        message: action.responseZ.items
      };
    case actionTypes.REQUEST_FAILED:
      return {
        ...state,
        message: action.message
      };
    default:
      return state;
  }
};
export default reducer;
