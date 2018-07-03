import * as actionTypes from './../actions/actionTypes'

const initialState = {
  items: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case actionTypes.RANDOM_EVENT:
      return {
        ...state,
        items: state.items + action.var
      };
    default:
      return state;
  }
};
export default reducer;
