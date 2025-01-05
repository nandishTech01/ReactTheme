import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/CartSlice';
import './ProductsLists.css';

const ProductsLists = () => {
  const dispatch = useDispatch();
  const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: 1 }));
  };

  return (
    <div className="products-container">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)} className="add-to-cart-button">Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsLists;