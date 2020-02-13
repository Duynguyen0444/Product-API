import React, {Component} from 'react';
import callAPI from '../../utils/apiCaller';
import {Link} from 'react-router-dom';

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

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox'
      ? target.checked
      : target.value;
    this.setState({[name]: value})
  }

  onSave = event =>{
    event.preventDefault();
    var {txtName, txtPrice, chkStatus} = this.state;
    var {history} = this.props;
    callAPI('products', 'POST', {
      name: txtName,
      price: txtPrice,
      status: chkStatus
    }).then(res =>{
      history.goBack();
    });
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
                onChange={this.onChange}/>
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

export default ProductsActionPage;