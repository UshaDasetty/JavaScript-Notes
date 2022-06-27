import React, {useState, useCallback} from 'react';
import List from './List'

const UseCallback = () => {
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const ItemList = useCallback(() => {
        return [number, number + 1, number + 2];   
    }, [number]);

    // Dark Theme
    const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',  // If dark is true, it set to black, else it set to white.
        color: dark ? 'white': 'black'              // If dark is true, it set to white, else it set to black.
    }  

    return (
        <>
            <div style={themeStyles}>
                <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
                <button onClick={()=> setDark(DarkMode => !DarkMode)}>Change Theme</button>
                <List getItems={ItemList}/>
            </div>
        </>
    )
}

export default UseCallback