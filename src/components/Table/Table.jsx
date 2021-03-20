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

    sortByFirstName = () => {
        const sortedEmployees = this.state..results.sort((a, b) => {
            if (b.name.last > a.name.last) {
                return -1
            }
            if (a.name.last > b.name.last) {
                return 1
            }
            return 0
        });
        if (this.state.sortOrder === "descend") {
            sortedEmployees.reverse()
            this.setState({ sortOrder: "ascend" })
        } else {
            this.setState({ sortOrder: "descend" })
        }
        this.setState({ results: sortedEmployees })
    }

    render() {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange}
                search={this.state.search} />
                
            </div>
        )
    }

}