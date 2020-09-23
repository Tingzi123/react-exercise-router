import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Products extends Component {
  render() {
    return (
      <div className="products">
          <p>All Products:</p>
          <Link to="/products/1" className="nav-link">Bicycle</Link>
          <Link to="/products/2" className="nav-link">TV</Link>
          <Link to="/products/3" className="nav-link">Pencil</Link>
      </div>
    );
  }
}

export default Products;
