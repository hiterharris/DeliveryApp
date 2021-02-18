import { productCardData } from '../../assets/data/products';

const INITIAL_STATE = {
    productCardData,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
};

export default productsReducer;
