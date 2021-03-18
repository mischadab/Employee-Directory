import React from 'react'
import './Search.css'

function Search( { handleSearchChange } ) {
    return (
        <div className='searchbox'>
            <form className="form-inline">
                <input type="search" className="form-control" placeholder="Type here" onChange={ e => handleSearchChange(e) } />
            </form>
        </div>
    )
}

export default Search
