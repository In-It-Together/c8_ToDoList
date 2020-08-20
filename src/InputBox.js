import React, { useRef } from 'react';

const InputBox = ({onAddTask}) => {

    const inputRef = useRef();
    const dateRef = useRef();

    const onClickButton = () => {
        onAddTask(dateRef.current.value, inputRef.current.value);
        inputRef.current.value = "";
    };

    const checkForEnter = (e) => {
        e.persist();
        if (e.keyCode === 13) {
            dateRef.current.focus();
        };
    };

    return (
        <>
            <input type="text" placeholder="Enter your todo." ref={inputRef} onKeyDown={(e) => checkForEnter(e)} />
            <br/>
            <input type="date" ref={dateRef} />
            <br/>
            <button onClick={() => onClickButton()}>Add Todo</button>
        </>
    );
}

export default InputBox;
