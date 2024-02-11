import React from 'react';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div>
            <h2>Магазин</h2>
            <p>Количество товаров в корзине: {cartItems.length}</p>
        </div>
    );
};

export default Navbar;
