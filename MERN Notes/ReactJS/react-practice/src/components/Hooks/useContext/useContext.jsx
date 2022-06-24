import React,{useState, useContext, createContext} from 'react'

const UserContext = createContext();

const UseContext = () => {
    const [user, setUser] = useState("Usha");

    return (
        <>
            <UserContext.Provider value={user}>
                <h2>Hello {user}!</h2>
                <ChildComponent1 userName={user}/>
            </UserContext.Provider>
        </>
    )
}


const ChildComponent1 = () => {
    return (
        <>
            <ChildComponent2 />
        </>
    )
}


const ChildComponent2 = () => {
    const userName = useContext(UserContext);
    return (
        <>
          <h1>Hello again, {userName}!</h1>  
        </>
    )
}



export default UseContext