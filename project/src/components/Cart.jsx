import React from 'react';

const Cart = ({ cartItems }) => {
    return (
        <div>
            <h3>Корзина</h3>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <p>{item.name} - {item.price} руб.</p>
                </div>
            ))}
        </div>
    );
};

export default Cart;
