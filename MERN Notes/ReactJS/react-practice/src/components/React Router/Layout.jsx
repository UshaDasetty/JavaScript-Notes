import React from 'react'
import {Link, Outlet} from 'react-router-dom';

const Layout = () => {
  return (
    <div>
        <ul style={{listStyle: "none"}}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About Us</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
        <Outlet/>
    </div>
  )
}

export default Layout