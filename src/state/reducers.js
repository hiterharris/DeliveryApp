import { combineReducers } from 'redux';
import { productCardData } from '../assets/data/products';

const INITIAL_STATE = {
    cart: [],
    productCardData,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default combineReducers({
  products: productsReducer,
});