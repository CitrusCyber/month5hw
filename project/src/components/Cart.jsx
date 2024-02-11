import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);

    return (
        <div>
            <h3>Корзина</h3>
            <ul>
                {cartItems.map((item) => (
                    <li key={item._id}>{item.name} - {item.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
