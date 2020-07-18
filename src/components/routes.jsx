import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from './cart';
import Products from './products';

export default (props) => {
  const { products, cartItems, updateCart } = props;
  return (
    <>
      <Switch>
        <Route
          path="/products"
          component={() => (
            <Products
              productsArray={products}
              cartItems={cartItems}
              updateCart={updateCart}
            />
          )}
        />
        <Route path="/cart" component={() => <Cart cartItems={cartItems} />} />
        <Route path="/" component={() => <h1>Welcome Home!!!!</h1>} />
      </Switch>
    </>
  );
};
