import React, {Component} from 'react';

class ProductsActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              id=""
              placeholder="Name of products"/>
          </div>
          <div className="form-group">
            <label>Price</label>
            <input type="number" className="form-control" placeholder="Price"/>
          </div>
          <div className="form-group">
            <label>Status</label>
          </div>

          <div className="checkbox">
            <label>
              <input type="checkbox" value=""/>
              Còn hàng
            </label>
          </div>

          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>

    );
  }
}

export default ProductsActionPage;