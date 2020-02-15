import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class ProductsItem extends Component {
  onDelete = id => {
    if (confirm('Are you sure delete ?')) {//eslint-disable-line
      this.props.onDelete(id);
    }
  }
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
          <Link to={`/products/${product.id}/edit`} className="btn btn-info mr-10">Edit</Link>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => this.onDelete(product.id)}>Delete</button>
        </td>
      </tr>
    );
  }
}

export default ProductsItem;