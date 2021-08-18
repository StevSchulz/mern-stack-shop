import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";
import CheckoutSteps from "../components/CheckoutSteps";

export const ShippingAddressScreen = (props) => {
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	if (!userInfo) {
		props.history.push("/signin");
	}

	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;
	if (cart.cartItems.length < 1) {
		props.history.push("/");
	}

	const [fullName, setFullName] = useState(shippingAddress.fullName);
	const [address, setAddress] = useState(shippingAddress.address);
	const [city, setCity] = useState(shippingAddress.city);
	const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
	const [country, setCountry] = useState(shippingAddress.country);

	const dispatch = useDispatch();
	const shippingAddresSubmitHandler = (e) => {
		e.preventDefault();
		dispatch(saveShippingAddress({ fullName, address, city, postalCode, country }));
		props.history.push("/payment");
	};

	return (
		<div>
			<CheckoutSteps step1 step2></CheckoutSteps>
			<form className="form" onSubmit={shippingAddresSubmitHandler}>
				<div>
					<h1>Shipping Address</h1>
				</div>
				<div>
					<label htmlFor="fullName"></label>
					<input
						type="text"
						placeholder="Enter full Name"
						required
						id="fullName"
						value={fullName}
						onChange={(e) => setFullName(e.target.value)}></input>
				</div>
				<div>
					<label htmlFor="address"></label>
					<input
						type="address"
						placeholder="Enter Address"
						required
						id="address"
						value={address}
						onChange={(e) => setAddress(e.target.value)}></input>
				</div>

				<div>
					<label htmlFor="city"></label>
					<input
						type="city"
						placeholder="Enter City"
						required
						id="city"
						value={city}
						onChange={(e) => setCity(e.target.value)}></input>
				</div>
				<div>
					<label htmlFor="postalCode"></label>
					<input
						type="postalCode"
						placeholder="Enter Postal Code"
						required
						id="postalCode"
						value={postalCode}
						onChange={(e) => setPostalCode(e.target.value)}></input>
				</div>
				<div>
					<label htmlFor="country"></label>
					<input
						type="Country"
						placeholder="Enter Country"
						required
						id="country"
						value={country}
						onChange={(e) => setCountry(e.target.value)}></input>
				</div>
				<div>
					<button className="primary" type="submit">
						Next Step
					</button>
				</div>
			</form>
		</div>
	);
};
