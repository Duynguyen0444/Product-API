import React, {Component} from 'react';
import ProductsList from '../../Component/ProductsList/ProductsList';
import ProductsItem from '../../Component/ProdutcsItem/ProductsItem';
import {connect} from 'react-redux';
import callAPI from '../../utils/apiCaller';
import {Link} from 'react-router-dom';
import {actFetchProductsRequest, actDeleteProductsRequest} from '../../Actions/index';

class ProductsListPage extends Component {
  //Component render => componentDidMount(setState) => render
  componentDidMount() {
    callAPI('products', 'GET', null).then(res => {
      // this.setState({products: res.data});
      this.props.fetchAllProduct();
    });
  }
  // ---------------------FUNCTION--------------------- 
  showProducts = products => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return (<ProductsItem
          key={index}
          product={product}
          index={index}
          onDelete={this.onDelete}/>);
      });
    }
    return result;
  }

  onDelete = id => {
    // var {products} = this.state;
    // callAPI(`products/${id}`, 'DELETE', null).then(res => {
    //   if (res.status === 200) {
    //     var index = this.findIndex(products, id);
    //     if (index !== -1) {
    //       products.splice(index, 1);
    //       this.setState({products: products});
    //     }
    //   }
    // });
    this.props.onDeleteProduct(id);
  }
  // ---------------------END FUNCTION---------------------
  render() {
    //Lất state từ store
    var {products} = this.props;
    return (
      <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
        <Link to="/products/add" className="btn btn-default mb-10">
          Add product</Link>
        <ProductsList>
          {this.showProducts(products)}
        </ProductsList>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {products: state.products}
}

//Dispatch action to props
const mapDispatchToProp = (dispatch, props) => {
  return {
    fetchAllProduct: () => {
      dispatch(actFetchProductsRequest());
    },
    onDeleteProduct: id =>{
      dispatch(actDeleteProductsRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(ProductsListPage);