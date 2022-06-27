import React from 'react'

const Keys = () => {

    const employee = [
        {
            id: 1,
            name: 'Dileep',
            age: 27
        },

        {
            id: 2,
            name: 'Usha',
            age: 25
        },

        {
            id: 3,
            name: 'Teja',
            age: 22
        }
    ]

    const empList = employee.map((emp) => {
        return <li key={emp.id}> {emp.name} : {emp.age}</li>
    });

    return (
        <>
            <h1>{empList}</h1>
        </>
    )
}

export default Keys