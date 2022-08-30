import React from 'react'
import { Outlet } from 'react-router-dom'

const Sidenav = () => {
    return (
    <div className='sidenav'>
        <div className='sidenav-container'>
            <ul className='nav-list' style={{listStyle:"none"}}>
                <li className='list-item'>Users</li>
                <li className='list-item'>Artists</li>
                <li className='list-item'>Albums</li>
                <li className='list-item'>Users Rating</li>
                <li className='list-item'>Albums Rating</li>
            </ul>
        </div>
        
        <Outlet/>
    </div>
    )
}

export default Sidenav