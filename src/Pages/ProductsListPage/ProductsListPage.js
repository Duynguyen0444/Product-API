import React, {Component} from 'react';
import ProductsList from '../../Component/ProductsList/ProductsList';
import ProductsItem from '../../Component/ProdutcsItem/ProductsItem';

class ProductsListPage extends Component {
  showProducts = products =>{
    var result = null;
    if(products.length > 0){
      result = products.map((product, index) =>{
        return (
          <ProductsItem key={index} product={product} index={index} />
        );
      });
    }
    return result;
  }
  render() {
    var products = [];
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-default">Add product</button>
        <ProductsList>
          {this.showProducts(products)}
        </ProductsList>
      </div>
    );
  }
}

export default ProductsListPage;