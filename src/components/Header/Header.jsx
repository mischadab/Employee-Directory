import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Employee Directory</h1>
                <p>Use the arrows or the search box for results</p>
            </div>
        )
    }
}

export default Header
