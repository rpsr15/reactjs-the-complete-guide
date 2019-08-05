import React from 'react';

const UserOutput = (props) => {
    return (
        <div>
             <p> { props.username} </p>
             <p> { props.password } </p>
        </div>
    );
};

export default UserOutput;