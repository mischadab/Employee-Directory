import React from 'react';
import API from '../../utils/API.js'
import Search from '../Search/Search';
import './Table.css';
import DateFormat from 'dateformat';

class Table extends React.Component { 
    state = {
        sortOrder: "",
        results: [],
        search: ""
    }

    componentDidMount() {
        API.getUsers().then(results => {
            console.log(results.data.results)
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            })
        })
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
        const sortedEmployees = this.state.results.sort((a, b) => {
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

    sortByLastName = () => {
        const sortedEmployees = this.state.results.sort((a, b) => {
            if (b.name.last > a.name.last) {
                return -1
            }
            if (a.name.last > b.name.last) {
                return 1
            }
            return 0
        })
        if (this.state.sortOrder === "descend") {
            sortedEmployees.reverse();
            this.setState({ sortOrder: "ascend" });
        } else {
            this.setState({ sortOrder: "descend" })
        }
        this.setState({ results: sortedEmployees})
    }

    render() {
        return (
            <div>
                <Search handleInputChange={this.handleInputChange}
                search={this.state.search} />

                <div className="table-responsive">
                    <table className="table table-striped table-responsive text-center table-hover">
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>First Name <span className="downArrow" onClick={this.sortByFirstName}></span></th>
                                <th>Last Name <span className="downArrow" onClick={this.sortByLastName}></span></th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>DOB</th>
                            </tr>
                        </thead>

                
                        { this.state.results && this.state.results.map(item =>
                            item.name.first.toLowerCase().includes(this.state.search) ?
                            <tbody key={item.login.uuid}>
                                <tr>
                                    <td><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail image"/></td>
                                    <td>{item.name.first}</td>
                                    <td>{item.name.last}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{DateFormat(item.dob.date, "mediumDate")}</td>
                                </tr>
                            </tbody>
                            
                            :

                            // last name sorting
                            item.name.last.toLowerCase().include(this.state.search) ?
                            <tbody key={item.login.uuid}>
                                <tr>
                                    <td><img src={item.picture.thumbnail} className="rounded-circle" alt="thumbnail image"/></td>
                                    <td>{item.name.first}</td>
                                    <td>{item.name.last}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.email}</td>
                                    <td>{DateFormat(item.dob.date, "mediumDate")}</td>
                                </tr>
                            </tbody>

                            :

                            null
                            )}

                    </table>
                </div>

            </div>
        )
    }

}

export default Table;