import React, { useState } from 'react';
import './App.scss';
import Header from './components/header';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './components/routes';

const allProducts = [
  { id: 123, name: 'HP Laptop', price: '122.33$' },
  { id: 124, name: 'Del Laptop', price: '120.33$' },
  { id: 125, name: 'MAC Laptop', price: '127.33$' },
  { id: 126, name: 'Lenovo Laptop', price: '129.33$' },
  { id: 127, name: 'Toshiba Laptop', price: '189.33$' },
];

function App() {
  const [cartItems, updateCart] = useState([]);
  return (
    <div className="App">
      <Router>
        <Header
          count={cartItems
            .map((el) => el.count || 1)
            .reduce((acc, el) => acc + el, 0)}
        />
        <Routes
          cartItems={cartItems}
          products={allProducts}
          updateCart={updateCart}
        />
      </Router>
    </div>
  );
}

export default App;
