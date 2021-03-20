import React from 'react';
import API from '../utils/API.js'
import Search from '../components/Search/Search';
import './Table.css';
import DateFormat from 'dateformat';

class Table extends React.Component { 
    state = {
        sortOrder: "",
        results: [],
        search: ""
    }

    componentDidMount() {
        API.ApiSearch()
        .then(res => {
            this.setState({ results: res.data.results })
            console.log(this.state.results)
        }).catch(err => console.log(err))
    }

    handleInputChange = event => {
        if (event.target.name === 'search') {
            const searchTerm = event.target.value.toLowerCase();
            this.setState({
                search: searchTerm
            })
        }
    }

}