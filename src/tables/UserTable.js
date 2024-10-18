import React from 'react'
import './UserTable.css'
const UserTable = props => {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>UserName</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>userName</td>
                <td>ElmerGama</td>
                <td>
                    <button className='button-styles'>delete</button>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default UserTable