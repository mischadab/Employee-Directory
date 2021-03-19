import React from 'react'
import Body from '../Body/Body'

function DataTable( props) {
   


    return (
        <div className='dataTable'>
            <table className="table">
                <thead>
                    <tr>
                        { props.headings.map((heading)=> {
                            return (
                                <th 
                                className="col" 
                                key={heading.name} 
                                style={{width:heading.width}} 
                                onClick={ () => {
                                    props.handleSort(heading.name.toLowerCase())
                                }} 
                                >
                                {heading.name}
                                </th>
                            )
                        } )}
                    </tr>
                </thead>

            <Body users={props.users} />

            </table>
        </div>
    )
}

export default DataTable;
