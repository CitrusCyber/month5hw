import React from 'react';
import { useSelector } from 'react-redux';

const UserDetails = () => {
    const userData = useSelector((state) => state.user);

    return (
        <div>
            <h2>User Details:</h2>
            <p>Name: {userData.name}</p>
            <p>Age: {userData.age}</p>
        </div>
    );
};

export default UserDetails;
