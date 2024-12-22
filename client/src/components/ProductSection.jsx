import React from 'react';
import ProductCard from './ProductCard';
import './ProductSection.css';

const ProductSection = ({ category, items }) => (
  <div className="product-section">
    <h2 id={category}>{category}</h2>
    <div className="product-scroll">
      {items.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default ProductSection;
