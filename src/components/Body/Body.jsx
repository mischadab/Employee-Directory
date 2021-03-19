import React from 'react'
import './Body.css'

function Body(props) {
    
    return (
    <tbody>
        { props.users[0] !==undefined && props.users[0].name ? (
            props.users.map(user => {
                return (
                    <tr key={user.login.uuid}>
                        <td className="align-middle">
                        <img
                        src={user.picture.medium}
                        className="img-responsive"/>
                        </td>
                        <td>
                            {user.name.first} {user.name.last}
                        </td>
                        <td>
                            {user.phone}
                        </td>
                        <td>
                            {user.email}
                        </td>

                    </tr>
                )
            })
        ) : (
            <></>
        )}
    </tbody>
    )
}

export default Body
