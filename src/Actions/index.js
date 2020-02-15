import * as types from '../Constants/ActionTypes';
import callAPI from '../utils/apiCaller';


//Thực hiện action gọi API + action dispatch lên store
export const actFetchProductsRequest = () => {
  return (dispatch) =>{
      return callAPI('products', 'GET', null).then(res =>{ //--------- Lấy được dữ liệu từ API
          dispatch(actFetchProducts(res.data));                    //--------- Dispatch action actFetchProducts
      });
  }
}

export const actFetchProducts = products => {
    return {type: types.FETCH_PRODUCTS, products}
  }