import React, { useState, useEffect } from 'react';
import Product from './product';
export default React.memo((props) => {
  const { updateCart, cartItems } = props;
  const [products, setProducts] = useState([]);

  const addToCartHandler = (id) => {
    if (cartItems.find((el) => el.id === id)) {
      updateCart(
        cartItems.map((el) =>
          el.id === id ? { ...el, count: (el.count || 1) + 1 } : el
        )
      );
    } else {
      updateCart([...cartItems, { ...products.find((el) => el.id === id) }]);
    }
  };
  useEffect(() => {
    setProducts(props.productsArray);
  }, []);
  return (
    <div className="product-container">
      {products.map((product) => (
        <Product
          product={product}
          buttonLabel="Add to cart"
          clickHandler={addToCartHandler.bind(this, product.id)}
        />
      ))}
    </div>
  );
});
