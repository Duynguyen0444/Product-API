import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {actAddProductsRequest, actGetProductRequest, actUpdateProductsRequest} from '../../Actions/index';
import {connect} from 'react-redux';

class ProductsActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      txtName: '',
      txtPrice: '',
      chkStatus: ''
    }
  }
  componentDidMount() {
    var {match} = this.props;
    if (match) {
      //Lấy tham số trên url
      var id = match.params.id;
      this.props.onEditProduct(id);
      // callAPI(`products/${id}`, 'GET', null).then(res => {
      //   var data = res.data;
      //   this.setState({id: data.id, txtName: data.name, txtPrice: data.price, chkStatus: data.status});
      // });
    }
  }
  //Khi nhận được props mới thực thi component này
  componentWillReceiveProps(nextProps){
    if(nextProps && nextProps.itemEditing){
      var {itemEditing} = nextProps;
      this.setState({
        id: itemEditing.id,
        txtName: itemEditing.name,
        txtPrice: itemEditing.price,
        chkStatus: itemEditing.status
      })
    }
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({[name]: value})
  }

  onSave = event => {
    event.preventDefault();
    var {txtName, txtPrice, chkStatus, id} = this.state;
    var {history} = this.props;
    var products = {
      id: id,
      name: txtName,
      price: txtPrice,
      status: chkStatus
    }
    if (id) { //-----Update
      this.props.onUpdateProduct(products);
      // callAPI(`products/${id}`, 'PUT', {
      //   name: txtName,
      //   price: txtPrice,
      //   status: chkStatus
      // }).then(res => {
      //   history.goBack();
      // });      
    } else { //-----Post
      this.props.onAddProducts(products);      
      // callAPI('products', 'POST', {
      //   name: txtName,
      //   price: txtPrice,
      //   status: chkStatus
      // }).then(res => {
      //   history.goBack();
      // });
    }
    history.goBack();   
  }

  render() {
    var {txtName, txtPrice, chkStatus} = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={this.onSave}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Name of products"
              name="txtName"
              value={txtName}
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              className="form-control"
              placeholder="Price"
              name="txtPrice"
              value={txtPrice}
              onChange={this.onChange}/>
          </div>
          <div className="form-group">
            <label>Status</label>
          </div>

          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="chkStatus"
                value={chkStatus}
                onChange={this.onChange}
                checked={chkStatus}/>
              Còn hàng
            </label>
          </div>
          <button type="submit" className="btn btn-primary mr-10">Save</button>
          <Link to='/products-list' className="btn btn-danger">Back</Link>
        </form>
      </div>

    );
  }
}


const mapStateToProps = state =>{
  return{
    itemEditing: state.itemEditing
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddProducts: products => {
      dispatch(actAddProductsRequest(products));
    },
    onEditProduct: id =>{
      dispatch(actGetProductRequest(id));
    }, 
    onUpdateProduct: products =>{
      dispatch(actUpdateProductsRequest(products));
    }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductsActionPage);