import React from 'react';

const TableRow = ({ user }) => {
  return ( 
    <tr>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.password}</td>
    </tr>
  )
}

export default TableRow;