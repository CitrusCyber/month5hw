import React from 'react';

const Navbar = ({ cartCount }) => {
    return (
        <div>
            <h2>Магазин</h2>
            <p>Товаров в корзине: {cartCount}</p>
        </div>
    );
};

export default Navbar;
