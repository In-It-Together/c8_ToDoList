import React from 'react';

const ToggleMessage = ({ isOn, message }) => {
    return (
        <>
            {isOn ? <h1>{message}</h1> : null}
        </>
    );
}

export default ToggleMessage;
