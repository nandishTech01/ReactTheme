import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', price: 10, quantity: 1 },
    { id: 2, name: 'Item 2', price: 20, quantity: 2 },
    { id: 3, name: 'Item 3', price: 30, quantity: 1 },
  ]);

  const handleRemoveItem = (item) => {
    setItems(items.filter(i => i.id !== item.id));
  };

  const handleClearCart = () => {
    setItems([]);
  };

  const handleQuantityChange = (item, quantity) => {
    setItems(items.map(i => i.id === item.id ? { ...i, quantity: parseInt(quantity) } : i));
  };

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="header-left">
          <h4 className="header-title">Checkout</h4>
          <nav className="breadcrumb" aria-label="breadcrumb">
            <ol className="breadcrumb-list">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-separator">•</li>
              <li className="breadcrumb-item">Checkout</li>
            </ol>
          </nav>
        </div>
        <div className="header-right">
          <img 
            alt="breadcrumbImg" 
            width="165" 
            height="165" 
            src="/images/breadcrumb/ChatBc.png" 
            className="breadcrumb-img"
          />
        </div>
      </div>
      <h2 className="cart-title">Shopping Cart</h2>
      <ul className="cart-items">
        {items.map(item => (
          <li key={item.id} className="cart-item">
            <div className="item-details">
              <span className="item-name">{item.name}</span>
              <span className="item-price">${item.price}</span>
            </div>
            <div className="item-actions">
              <input 
                type="number" 
                value={item.quantity} 
                onChange={(e) => handleQuantityChange(item, e.target.value)} 
                min="1"
                className="item-quantity"
              />
              <button onClick={() => handleRemoveItem(item)} className="remove-button">Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={handleClearCart} className="clear-cart-button">Clear Cart</button>
    </div>
  );
};

export default Cart;
