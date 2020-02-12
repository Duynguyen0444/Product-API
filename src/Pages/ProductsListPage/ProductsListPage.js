import React, {Component} from 'react';
import ProductsList from '../../Component/ProductsList/ProductsList';
import ProductsItem from '../../Component/ProdutcsItem/ProductsItem';
import {connect} from 'react-redux';

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
    var {products} = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <button type="button" className="btn btn-default mb-10">Add product</button>
        <ProductsList>
          {this.showProducts(products)}
        </ProductsList>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return{
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductsListPage);