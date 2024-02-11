import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store.jsx';
import Navbar from './components/NavBar.jsx';
import ProductList from './components/ProductList.jsx';
import Cart from './components/Cart.jsx';
import productsData from './data/products.json';

const App = () => {
    const products = productsData;

    return (
        <Provider store={store}>
            <div>
                <Navbar />
                    <ProductList products={products} />
                    <Cart />
            </div>
        </Provider>
    );
};

export default App;
