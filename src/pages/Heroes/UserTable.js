import React from 'react'
import "../supers.css";

const UserTable = props => (
  <table>
    <thead>
      <tr>
        <th>Nombre Real</th>
        <th>Super Heroe</th>
        <th>Edad</th>
        <th>Afilación</th>
        <th>Villano</th>
        <th>Descripción</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map(user => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.edad}</td>
            <td>{user.afi}</td>
            <td>{user.villa}</td>
            <td>{user.des}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No users</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default UserTable
