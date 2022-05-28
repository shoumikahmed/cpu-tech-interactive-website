import React from 'react';

const AdminRow = ({ user }) => {
    const { email } = user
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td><button className="btn btn-xs">Make Admin</button></td>
            <td>Blue</td>
        </tr>
    );
};

export default AdminRow;