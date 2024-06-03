import React from 'react';

const CardView = ({ cards }) => {
  return (
    <div className="product-grid">
      {cards.map((product) => (
        <div className="product-item" key={`${product.name}-${product.color}`}>
          <img src={product.img} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.color}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default CardView;