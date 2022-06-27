import React, {useState, useEffect} from 'react'

const List = ({getItems}) => {

    const [items, setItem] = useState([])

    useEffect(() => {
        setItem(getItems())
    }, [getItems]);

    return items.map(item => <div key={item}>{item}</div>)
}

export default List