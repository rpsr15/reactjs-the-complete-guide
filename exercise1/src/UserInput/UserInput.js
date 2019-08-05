import React from 'react';

const UserInput = (props) => {
    return <input type="text"
        onChange={ (event) => props.password(event) }
    />
};

export default UserInput;