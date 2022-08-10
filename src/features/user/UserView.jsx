import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	return (
		<div>
			<h2>List of users</h2>
			{user.loading && <h1>Loading...</h1>}
			{!user.loading && user.error ? <h1>Error: {user.error}</h1> : null}
			{!user.loading && user.users.length ? (
				<ul>
					{user.users.map((user) => (
						<li key={user.id}>{user.name}</li>
					))}
				</ul>
			) : null}
		</div>
	);
};

export default UserView;
