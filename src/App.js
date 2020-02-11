import React, {Component} from 'react';
import './App.css';
import Menu from './Component/Menu/Menu';
import ProductsList from './Component/ProductsList/ProductsList';
class App extends Component {
  render() {
    return (
      <div>
        {/* --------------------MENU-------------------- */}
        <Menu />
        {/* --------------------PRODUCTS-------------------- */}

        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <button type="button" className="btn btn-default">Add product</button>
              {/* Products list */}
              <ProductsList />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
