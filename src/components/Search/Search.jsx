import React from 'react'
import './Search.css'
import DataAreaContext from '../../utils/DataAreaContext'

function Search( props ) {
  
    return (
        <div className='searchbox'>
            <form className="form-inline">
                <input type="search" className="form-control" placeholder="Type here" onChange={ e => props.handleSearchChange(e) } />
                <button className='btn' type='submit'>Search</button>
            </form>
        </div>
    )
}

export default Search
