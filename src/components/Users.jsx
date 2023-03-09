import { useState, useEffect } from 'react';

export const Users = () => {
	const [users, setUsers] = useState([]);

	const getUsuarios = async () => {
		const response = await fetch("https://jsonplaceholder.typicode.com/users");
		const data = await response.json();
		
		console.log(data);

		setUsers(data);
	}

	useEffect(() => {
		getUsuarios();
	}, []);

	return (
		<div>Users</div>
	)
}

export default Users;