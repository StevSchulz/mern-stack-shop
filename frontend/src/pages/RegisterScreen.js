import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoadingBox } from "../components/LoadingBox";
import { MessageBox } from "../components/MessageBox";
import { register } from "../actions/userActions";

const RegisterScreen = (props) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [conPassword, setConPassword] = useState("");

	const redirect = props.location.search ? props.location.search.split("=")[1] : "/";

	const userRegister = useSelector((state) => state.userRegister);
	const { userInfo, loading, error } = userRegister;
	const dispatch = useDispatch();
	// const test = useSelector((state) => state.userRegister);
	const submitHandler = (e) => {
		e.preventDefault();
		if (password !== conPassword) {
			alert("password and confirm does not match");
		} else {
			dispatch(register(name, email, password));
		}
	};
	console.log(props);
	useEffect(() => {
		if (userInfo) {
			props.history.push(redirect);
		}
	}, [userInfo, props.history, redirect]);
	return (
		<div>
			<form className="form" onSubmit={submitHandler}>
				<div>
					<h1>Register</h1>
				</div>
				{loading && <LoadingBox></LoadingBox>}
				{error && <MessageBox variant="danger">{error}</MessageBox>}

				<div>
					<label htmlFor="name">Name</label>
					<input
						required
						type="text"
						id="name"
						placeholder="Enter name here"
						onChange={(e) => setName(e.target.value)}></input>
				</div>
				<div>
					<label htmlFor="email">Email</label>
					<input
						required
						type="email"
						placeholder="Enter email here"
						id="email"
						onChange={(e) => setEmail(e.target.value)}></input>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<input
						required
						type="password"
						placeholder="Enter password"
						id="password"
						onChange={(e) => setPassword(e.target.value)}></input>
				</div>
				<div>
					<label htmlFor="confirmPassword">Confirm Password</label>
					<input
						required
						type="password"
						placeholder="Confirm password"
						id="confirmPassword"
						onChange={(e) => setConPassword(e.target.value)}></input>
				</div>
				<div>
					<label />
					<button className="primary" type="submit">
						Register
					</button>
				</div>
				<div>
					<label />
					<div>
						Already registered?{" "}
						<Link to="/signin">Log in to your account</Link>
					</div>
				</div>
			</form>
		</div>
		// 	<div class="">
		// 		<h1>Create Account</h1>
		// 	</div>
		// 	<label>Name</label>
		// 	<form>
		// 		<input
		// 			id="name"
		// 			type="text"
		// 			required
		// 			defaultValue="Enter Name Here"></input>
		// 	</form>
		// 	<label>Email Address</label>
		// 	<form>
		// 		<input
		// 			id="email"
		// 			type="text"
		// 			required
		// 			defaultValue="Enter Email Here"></input>
		// 	</form>
		// 	<label>Password</label>
		// 	<form>
		// 		<input
		// 			id="password"
		// 			type="text"
		// 			required
		// 			defaultValue="Enter Password Here"></input>
		// 	</form>
		// 	<label>Confirm Password</label>
		// 	<form>
		// 		<input
		// 			id="confirm-password"
		// 			type="text"
		// 			required
		// 			defaultValue="Confirm Password"></input>
		// 	</form>
		// 	<button className="primary">Register</button>
		// </div>
	);
};

export default RegisterScreen;
