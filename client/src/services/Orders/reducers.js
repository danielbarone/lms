import * as actionTypes from './actionTypes';
import updateObject from '../utils';

const initialState = {
  data: null,
  error: null,
  loading: false,
};

const grabOrdersStart = (state) => (
  updateObject(state, {
    error: null,
    loading: true,
  })
);

const grabOrdersSuccess = (state, action) => (
  updateObject(state, {
    data: action.data.results,
    error: null,
    loading: false,
  })
);

const grabOrdersFail = (state, action) => (
  updateObject(state, {
    error: action.error,
    loading: false,
  })
);

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GRAB_ORDERS_START: return grabOrdersStart(state);
    case actionTypes.GRAB_ORDERS_SUCCESS: return grabOrdersSuccess(state, action);
    case actionTypes.GRAB_ORDERS_FAIL: return grabOrdersFail(state, action);
    default:
      return state;
  }
};

export default ordersReducer;
