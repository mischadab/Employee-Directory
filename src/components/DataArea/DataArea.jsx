import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import API from '../../utils/API'
import './DataArea.css'
import DataAreaContext from '../../utils/DataAreaContext'

class DataArea extends Component {

    handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = developerState.users.filter( item => { 
            let values = item.name.first.toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        })
    }

    render() {
        return (
            <div>
                <Navbar/>
            </div>
        )
    }
}

export default DataArea
