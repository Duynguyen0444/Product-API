import React, {Component} from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="navbar navbar-default">
        <a className="navbar-brand">CALL API</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a>Home</a>
          </li>
          <li>
            <a>Products</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Menu;