import React, { useState } from 'react'
import "../supers.css";

const AddUserForm2 = props => {
	const initialFormState = { id: null, name: '', username: '', edad: '', afi: '', des:''}
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Nombre Real</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Nombre De Villano</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange}/>
			<label>Edad</label>
			<input type="text" name="edad" value={user.edad} onChange={handleInputChange} />
			{/* <label>Afilación</label>
			<input type="text" name="afi" value={user.afi} onChange={handleInputChange} /> */}
			<label>Afilación</label>
			<select name="afi" onChange={handleInputChange}>
			<option value=''></option>		
			<option value='Marvel'>Marvel</option>
			<option value='DC Comics'>DC Comics</option>
			</select>
			<label>Descripción</label>
			{/* <input type="text" name="des" value={user.des} onChange={handleInputChange}/> */}
			<p><textarea name="des" value={user.des} onChange={handleInputChange}></textarea></p>
			<button>Agregar Nuevo Villano</button>
		</form>
	)
}

export default AddUserForm2