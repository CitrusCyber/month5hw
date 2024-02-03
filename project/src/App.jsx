import React, { useReducer } from 'react';
import Navbar from './components/NavBar.jsx';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import productsData from './data/products.json';

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        default:
            return state;
    }
};

const App = () => {
    const [cartItems, dispatch] = useReducer(cartReducer, []);
    const [products] = React.useState(productsData);

    const handleBuyClick = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    return (
        <div>
            <Navbar cartCount={cartItems.length} />
                <ProductList products={products} onBuyClick={handleBuyClick} />
                <Cart cartItems={cartItems} />
        </div>
    );
};

export default App;
