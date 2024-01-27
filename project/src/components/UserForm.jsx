import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const UserForm = () => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({ name: '', age: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'SET_USER_DATA', payload: userData });
        setUserData({ name: '', age: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={userData.name || ''} onChange={handleChange} />
            </label>
            <br />
            <label>
                Age:
                <input type="text" name="age" value={userData.age || ''} onChange={handleChange} />
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
