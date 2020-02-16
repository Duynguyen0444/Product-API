import * as types from '../Constants/ActionTypes';

var initialState = [];

var findIndex = (products, id) => {
  var result = -1;
  products.forEach((product, index) => {
    if (product.id === id) {
      result = index;
    }
  });
  return result;
}

const products = (state = initialState, action) => {
  var index = -1;
  var {id} = action; //id lấy từ action
  switch (action.type) {
    case types.FETCH_PRODUCTS: //-----------Trả về các products
      state = action.products;
      return [...state];
    case types.DELETE_PRODUCTS:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    case types.ADD_PRODUCTS:
      state.push(action.products)
      return [...state];
    default:
      return [...state];
  }
}

export default products;