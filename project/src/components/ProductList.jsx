import React from 'react';
import Product from './Product.jsx';

const ProductList = ({ products, onBuyClick }) => {
    return (
        <div>
            <h2>Список товаров</h2>
            {products.map((product) => (
                <Product key={product._id} product={product} onBuyClick={onBuyClick} />
            ))}
        </div>
    );
};

export default ProductList;
