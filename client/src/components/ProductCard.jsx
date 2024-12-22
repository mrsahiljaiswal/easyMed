import React from 'react';
import './ProductCard.css';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.description}</p>
    <p>{product.price}</p>
  </div>
);

export default ProductCard;
