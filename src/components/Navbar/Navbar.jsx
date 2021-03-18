import React from 'react'
import './Navbar.css'
import Search from '../Search/Search'

function Navbar( handleSearchChange ) {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-collapse row">
                    <Search handleSearchChange={handleSearchChange}/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar