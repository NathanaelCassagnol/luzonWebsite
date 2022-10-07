import React, { useState } from "react";
import LoginForm from '../Components/Login_Form.js';

const Login = () => {
	// User Login info
	const database = [
		{
			username: "admin",
			password: "admin",
			role: "admin"
		},
		{
			username: "user",
			password: "user",
			role: "user"
		},
		{
			username: "creator001",
			password: "creator",
			role: "creator"
		}
	];

	// React States
	const [user, setUser] = useState({ name: "", email: "", role: "" });
	const [error, setError] = useState("");
	const [isSubmitted, setIsSubmitted] = useState(false);

	const errors = {
		uname: "invalid username",
		pass: "invalid password"
	};

	const Login = details => {
		const userData = database.find((temp) => temp.username === details.name);

		if (userData) {
			if (userData.password !== details.password) {
				// Invalid password
				setError({ name: "pass", message: errors.pass });
			} else {
				setUser({
					name: details.name,
					email: details.email,
					role: details.role
				});
				setIsSubmitted(true);
			}
		}
		else {
			// Username not found
			setError({ name: "uname", message: errors.uname });
		}
	}

	const Logout = () => {
		setUser({ name: "", email: "", role: "" });
	}

	return (
		<div>
			{(user.email != "") ? (
				<div className="welcome">
					<h2>Welcome, <span>{user.name}</span></h2>
					<button onClick={Logout}>Logout</button>
				</div>
			) : (
					<LoginForm Login={Login} error={error} />	
			)}
		</div>
	);
};

export default Login;