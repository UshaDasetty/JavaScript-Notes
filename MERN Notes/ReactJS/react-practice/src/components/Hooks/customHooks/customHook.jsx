import React, {useState} from 'react'
import useDocument from './useDocument'

const CustomHook = () => {
    const [count, setCount] = useState(0);
    useDocument(count);

    return (
        <button onClick={()=>setCount(count+1)} >Count: {count}</button>
    )
}

export default CustomHook