import React from 'react'
import './Header.css'

function Header() {
    return (
        <div>
        <div className="jumbotron jumbotron-fluid" id="jumboTron">
        <div className="container">
            <h1>Employee Directory</h1>
            <p>Search for an Employee by first or last name, or select a column heading to sort</p>
        </div>
        </div>
        </div>
    )
}

export default Header;