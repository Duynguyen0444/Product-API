import React, {Component} from 'react';

class ProductsItem extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <tr>
        <td>1</td>
        <td>1</td>
        <td>IPhone</td>
        <td>999</td>
        <td>
          <span class="label label-warning">Còn hàng</span>
        </td>
        <td>
          <button type="button" class="btn btn-info">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default ProductsItem;