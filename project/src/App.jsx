import React, { useState } from 'react';
import Navbar from './components/NavBar.jsx';
import ProductList from './components/ProductList.jsx';
import products from './data/products.json';

const App = () => {
    const [cartCount, setCartCount] = useState(0);

    const handleBuyClick = (productId) => {
        setCartCount((prevCount) => prevCount + 1);
        console.log(`Товар с ID ${productId} добавлен в корзину!`);
    };

    return (
        <div>
            <Navbar cartCount={cartCount} />
            <ProductList products={products} onBuyClick={handleBuyClick} />
        </div>
    );
};

export default App;
