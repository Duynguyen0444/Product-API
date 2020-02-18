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

//-----------------------------Action Edit-----------------------------
export const actGetProduct = products => {
  return {type: types.EDIT_PRODUCTS, products}
}

export const actGetProductRequest = id => {
  return dispatch => {
    return callAPI(`products/${id}`, 'GET', null).then(res => {
      dispatch(actGetProduct(res.data));
    });
  }
}

//-----------------------------Action Update-----------------------------
export const actUpdateProducts = products => {
  return {type: types.UPDATE_PRODUCTS, products}
}

export const actUpdateProductsRequest = products => {
  return dispatch => {
    return callAPI(`products/${products.id}`, 'PUT', products).then(res => {
      dispatch(actUpdateProducts(res.data));
    })
  }
}