import React from 'react';
import { Link } from 'react-router-dom';
export default ({ count }) => {
  return (
    <div className="header">
      <div className="headerItems">
        <Link to="/products">
          <p>Products</p>
        </Link>
        <Link to="/cart">
          <p>cart ({count})</p>
        </Link>
      </div>
    </div>
  );
};
