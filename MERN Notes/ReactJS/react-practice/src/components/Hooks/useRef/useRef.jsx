import React,{useRef} from 'react'

const UseRef = () => {
    const inputElement = useRef();

    const clickHandler = () => {
        alert(inputElement.current.value);
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button type="button" onClick={clickHandler}>Click</button>
        </>
    )
}

export default UseRef