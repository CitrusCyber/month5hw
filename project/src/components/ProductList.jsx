import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './cartSlice.jsx';

const ProductList = ({ products }) => {
    const dispatch = useDispatch();

    const handleBuyClick = (product) => {
        dispatch(addItem(product));
    };

    return (
        <div>
            <h3>Список товаров</h3>
            {products.map((product) => (
                <div key={product._id}>
                    <p>{product.name} - {product.price} руб.</p>
                    <button onClick={() => handleBuyClick(product)}>Купить</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
