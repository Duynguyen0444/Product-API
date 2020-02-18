import * as types from '../Constants/ActionTypes';

const initialstate = [];

const itemEditing = (state = initialstate, action) => {
  switch (action.type) {
    case types.EDIT_PRODUCTS:
      //Lưu lại products hiện tại lên store
      return action.products;
    default:
      return [...state];
  }
}

export default itemEditing;
