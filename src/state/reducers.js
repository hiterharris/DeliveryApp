import { combineReducers } from 'redux';
import { productCardData } from '../assets/data/products';

const INITIAL_STATE = {
    // cart: [],
    productCardData,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case 'ADD_PRODUCT':
    //     const { products } = state;

    //     const addedProduct = cart.splice(action.payload, 1);

    //     cart.push(addedProduct);
  
    //     const newState = { cart, products };
  
    //     return newState;
    default:
      return state
  }
};

export default combineReducers({
  products: productsReducer
});