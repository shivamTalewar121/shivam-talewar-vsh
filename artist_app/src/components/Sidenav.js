import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Sidenav = () => {
    let navigate = useNavigate();

    const handleNavigation = (e) => {
        let path = (e.target.innerText).toLowerCase();
        if (path === 'users') {
            navigate("/");
        }
        else {
            navigate(`/${path}`);
        }
    }
    return (
        <div className='sidenav'>
            <div className='sidenav-container'>
                <ul className='nav-list' style={{ listStyle: "none" }}>
                    <li onClick={(e) => handleNavigation(e)} className='list-item' style={{ textDecoration: "underline" }}>Users</li>
                    <li onClick={(e) => handleNavigation(e)} className='list-item' style={{ textDecoration: "underline" }}>Artist</li>
                    <li onClick={(e) => handleNavigation(e)} className='list-item' style={{ textDecoration: "underline" }}>Albums</li>
                    <li onClick={(e) => handleNavigation(e)} className='list-item' style={{ textDecoration: "underline" }}>Users Rating</li>
                    <li onClick={(e) => handleNavigation(e)} className='list-item' style={{ textDecoration: "underline" }}>Albums Rating</li>
                </ul>
            </div>

            <Outlet />
        </div>
    )
}

export default Sidenav