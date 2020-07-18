import React from 'react';
import Product from './product';
export default React.memo((props) => {
  const { cartItems = [] } = props;

  return (
    <div className="product-container">
      {cartItems.length > 0 ? (
        cartItems.map((product) => (
          <Product
            product={product}
            buttonLabel="Remove from cart"
            clickHandler={() => alert('You Clicked me..!')}
          />
        ))
      ) : (
        <h2>You Donot Have Items in Your Cart Yet </h2>
      )}
    </div>
  );
});
