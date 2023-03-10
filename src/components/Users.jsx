import { useState, useEffect } from 'react';

import './Users.css';

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

	return <>
		<h3>Users</h3>

		{/* <ul>
			{users.map(user => <li key={user.id}>{user.name} - {user.email} </li>)}
		</ul> */}

		<table>
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Username</th>
					<th>Email</th>
					<th>Phone</th>
					<th>Website</th>
				</tr>
			</thead>
			<tbody>
				{users.map(user =>(
					<tr key={user.id}>
						<td>{user.id}</td>
						<td>{user.name}</td>
						<td>{user.username}</td>
						<td>{user.phone}</td>
						<td>{user.email}</td>
						<td><a href={user.website} target="_blank">{user.website}</a></td>
					</tr>
				))}
			</tbody>
		</table>
	</>
}

export default Users;