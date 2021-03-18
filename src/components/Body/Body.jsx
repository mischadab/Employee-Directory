import React from 'react'
import './Body.css'

function Body({users}) {
    
    return (
    <tbody>
        { users[0] !==undefined && users[0].name ? (
            users.map(({ login, name, picture, phone, email, bd }) => {
                return (
                    <tr key={login.uuid}>
                        <td className="align-middle">
                            
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
