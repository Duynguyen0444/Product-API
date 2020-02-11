import React, { Component } from 'react';
import ProductsItem from '../ProdutcsItem/ProductsItem';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="panel panel-primary">
            <div className="panel-heading">
              <h3 className="panel-title">Danh sách sản phẩm</h3>
            </div>
            <div className="panel-body">
              <table className="table table-bordered table-hover">
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>PRICE</th>
                    <th>STATUS</th>
                    <th>ACTION</th>
                  </tr>
                </thead>
                <tbody>
                    {/* Products item */}
                  <ProductsItem />
                </tbody>
              </table>
            </div>
          </div>
        );
    }
}
 
export default ProductsList;