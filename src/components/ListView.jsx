import React from 'react';

const ListView = ({ items }) => {
  return (
    <div className="product-list list">
      {items.map((product) => (
        <div className="product-item" key={`${product.name}-${product.color}`}>
          <img src={product.img} alt={product.name} />
          <div>
            <h3>{product.name}</h3>
            <p>{product.color}</p>
            <p>${product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListView;