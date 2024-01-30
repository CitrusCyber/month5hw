import React from 'react';

const Product = ({ product, onBuyClick }) => {
    const handleBuyClick = () => {
        onBuyClick(product._id);
    };

    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', cursor: 'pointer' }}>
            <h3>{product.name}</h3>
            <p>Цена: {product.price}</p>
            <button onClick={handleBuyClick}>Купить</button>
        </div>
    );
};

export default Product;
