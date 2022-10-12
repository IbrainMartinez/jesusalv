import React, { useState, Fragment } from 'react'
import AddUserForm from './AddUserForm2'
import EditUserForm from './EditUserForm2'
import UserTable from './UserTable2'
import "../supers.css";

const Villanos = () => {
	// Data
	const usersData = [
		// { id: 1, name: '', username: '', edad: '', afi: '', des:''},
	]

	const initialFormState = { id: null, name: '', username: '', edad: '', afi: '', des:'' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, name: user.name, username: user.username, edad: user.edad, afi: user.afi, des: user.userdes })
	}

	return (
		<div className='Cuerpo'>
		<div className="container">
			<h1 className='titulos'>CRUD Villanos</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2 className='titulos'>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2 className='titulos'>Agregar Villano</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2 className='titulos'>Ver Villano</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
		</div>
	)
}

export default Villanos;