import React,{useState} from 'react'

const UseState = () => {

const [color,setColor] = useState("Blue");

return (
    <>
        <h1>My Favorite Color is {color}</h1>
        <button onClick={()=>setColor("Orange")}>Change Color</button>
    </>
  )
}

export default UseState