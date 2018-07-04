import * as actionTypes from './../actions/actionTypes'

const initialState = {
  items: 0,
  message: [],
  id: '*'
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.RANDOM_EVENT:
      return {
        ...state,
        items: state.items + action.var
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
