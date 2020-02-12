import React, {Component} from 'react';

class ProductsItem extends Component {
  render() {
    var {product, index} = this.props;
    var statusName = product.status
      ? 'Còn hàng'
      : 'Hết hàng';
    var statusClass = product.status
      ? 'warning'
      : 'default';
    return (
      <tr>
        <td>{index + 1}</td>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td>
          <span className={`label label-${statusClass}`}>
            {statusName}
          </span>
        </td>
        <td>
          <button type="button" class="btn btn-info mr-10">Edit</button>
          <button type="button" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    );
  }
}

export default ProductsItem;