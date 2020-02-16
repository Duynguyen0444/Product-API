import * as types from '../Constants/ActionTypes';
import callAPI from '../utils/apiCaller';

//Thực hiện action gọi API + action dispatch lên store
export const actFetchProductsRequest = () => {
  return (dispatch) => {
    return callAPI('products', 'GET', null).then(res => { //--------- Lấy được dữ liệu từ API
      dispatch(actFetchProducts(res.data)); //--------- Dispatch action actFetchProducts
    });
  }
}

export const actFetchProducts = products => {
  return {type: types.FETCH_PRODUCTS, products}
}

//-----------------------------Action Delete-----------------------------
export const actDeleteProductsRequest = id => {
  return (dispatch) => {
    return callAPI(`products/${id}`, 'DELETE', null).then(res => {
      dispatch(actDeleteProducts(id));
    })
  }
}

export const actDeleteProducts = id => {
  return {type: types.DELETE_PRODUCTS, id}
}

//-----------------------------Action Add-----------------------------
export const actAddProductsRequest = products => {
  return dispatch => {
    return callAPI('products', 'POST', products).then(res => {
      dispatch(actAddProducts(res.data)); //Product trên server trả về
    });
  }
}

export const actAddProducts = products => {
  return {type: types.ADD_PRODUCTS, products}
}