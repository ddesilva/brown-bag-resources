import { SET_PRODUCT } from './actions';

const INITIAL_STATE = {};

function products(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_PRODUCT: {
      return { ...state, ...action.data };
    }
    default: {
      return state;
    }
  }
}

export default products;
