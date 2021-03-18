import React from 'react'
// import Body from 

function DataTable( { headings, users, handlesort }) {
    return (
        <div className='dataTable'>
            <table className="table">
                <thead>
                    <tr>
                        { headings.map( ( { name, width } ) => {
                            return (
                                <th className="col" key={name} style={{width}} onClick={ () => {
                                    handlesort(name.toLowerCase())
                                }} >
                                    {name}
                                </th>
                            )
                        } ) }
                    </tr>
                </thead>

                {/* <Body users={users} /> */}

            </table>
        </div>
    )
}

export default DataTable
