import React from 'react';
import { Provider } from 'react-redux';
import store from './pages/store.jsx';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <UserForm />
                <UserDetails />
            </div>
        </Provider>
    );
};

export default App;
