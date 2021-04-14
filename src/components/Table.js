import React from "react";

export default function Table({ data }) {
    return (
        <div>
            <table className="table__table">
                <thead>
                <tr key="head" className="table__head"
                >
                    <th>Id</th>
                    <th>Username</th>
                    <th>Superuser</th>
                    <th>Staff</th>
                    <th>Active</th>
                </tr>
                </thead>

                <tbody >
                {data.map((user) => (
                    <tr key ={user.id} className="table__cell">
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{`${user.is_superuser}`}</td>
                        <td>{`${user.is_staff}`}</td>
                        <td>{`${user.is_active}`}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
