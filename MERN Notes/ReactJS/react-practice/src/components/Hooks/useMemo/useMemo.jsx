import React, {useState, useEffect, useMemo} from 'react'

const slowFunction = (num) => {
    console.log("Calling Slow Function");

    for (let i = 0; i <1000000000000000; i++) {
        return num *2;
    }
}

const UseMemo = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    
    const DoubleNumber = useMemo(() => {
        return slowFunction(number);
    }, [number]);   // renders only when number updates


    // Dark Theme
    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',  // If dark is true, it set to black, else it set to white.
            color: dark ? 'white': 'black'              // If dark is true, it set to white, else it set to black.
        }
    },[dark]);   // renders only when theme is changed


    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={()=> setDark(DarkMode => !DarkMode)}>Change Theme</button>
            <div style={themeStyles}>{DoubleNumber}</div>
        </>
    )
}

export default UseMemo