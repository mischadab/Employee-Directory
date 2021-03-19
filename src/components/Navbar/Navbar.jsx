import React from 'react'
import './Navbar.css'
import Search from '../Search/Search'

function Navbar( props) {
    return (
        <div>
            <nav className="navbar">
                <div className="navbar-collapse row">
                    <Search handleSearchChange={props.handleSearchChange}/>
                </div>
            </nav>
        </div>
    )
}

export default Navbar