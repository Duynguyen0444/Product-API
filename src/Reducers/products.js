import * as types from '../Constants/ActionTypes';

var initialState = [];

const products = (state = initialState, action) => {
  switch (action.type) {      
    case types.FETCH_PRODUCTS: //-----------Trả về các products
      state = action.products;
      return [...state];
    default:
      return [...state];
  }
}

export default products;