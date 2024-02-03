import React from 'react';

const ProductList = ({ products, onBuyClick }) => {
    return (
        <div>
            <h3>Список товаров</h3>
            {products.map((product) => (
                <div key={product._id}>
                    <p>{product.name} - {product.price} руб.</p>
                    <button onClick={() => onBuyClick(product)}>Купить</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
