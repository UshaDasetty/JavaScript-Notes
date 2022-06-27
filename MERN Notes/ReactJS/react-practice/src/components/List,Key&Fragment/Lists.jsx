import React from 'react'

const Lists = () => {

    const menuItems = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const ListedMenu = menuItems.map(menu => {
        return <li>{menu}</li>;
    })

    return (
        <>
            <h1>This is List Component</h1>
            <ul>{ListedMenu}</ul>
        </>
    )
}

export default Lists