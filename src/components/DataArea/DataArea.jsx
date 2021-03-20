import React, { Component } from 'react'
import Navbar from '../Navbar/Navbar'
import API from '../../utils/API'
import DataTable from '../DataTable/DataTable'


class DataArea extends Component {
    state = {
        users: [{}],
        filteredUsers: [{}]
    }
    headings = [
        { name: "Image", width: "10%" },
        { name: "Name", width: "10%" },
        { name: "Phone", width: "10%" },
        { name: "Email", width: "10%" },
        { name: "DOB", width: "10%" },
        {}

    ]

    componentDidMount() {
        API.getUsers().then(results => {
            console.log(results.data.results)
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            })
        })

    }

    handleSort = heading => {
        if ( state.order === "descend" ) {
            setState ({
                order: "ascend"
            })
        } else {
            setState ({
                order: "descend"
            })
        }
    }

    compareFnc = (a, b) => {
        if (state.order === "ascend") {
            if (a[heading] === undefined) {
                return 1;
            } else if (b[heading] === undefined) {
                return -1;
            } else if (heading === "name") {
                return a[heading].first.localeCompare(b[heading].first);
            } else {
                return b[heading] - a[heading]
            }
        }
    }


    handleSearchChange = event => {
        const filter = event.target.value;
        const filteredList = this.state.users.filter(item => {
            let values = item.name.first.toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        })
        this.setState({ filteredUsers: filteredList })
    }

    render() {
        return (
            <div>
                <Navbar handleSearchChange={this.handleSearchChange} />
                <DataTable
                    headings={this.headings}
                    users={this.state.filteredUsers}
                    handleSort={this.handleSort}
                />
            </div>
        )
    }
}

export default DataArea
