import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailOrder } from "../actions/orderActions";
import { LoadingBox } from "../components/LoadingBox";
import { MessageBox } from "../components/MessageBox";

const OrderScreen = (props) => {
	const orderID = props.match.params.id;

	const userID = useSelector((state) => state.userSignin.userInfo._id);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(detailOrder(orderID, userID));
	}, [dispatch, orderID, userID]);

	const orderDetail = useSelector((state) => state.orderDetail);
	const { loading, error, orderDetails } = orderDetail;

	// console.log(orderDetail);
	const getDate = (inputString) => {
		let year = inputString.substring(0, 4);
		let month = inputString.substring(5, 7);
		let day = inputString.substring(8, 10);

		return `${day}.${month}.${year}`;
	};
	// const orderDetails
	return (
		<>
			{loading ? (
				<LoadingBox></LoadingBox>
			) : error ? (
				<MessageBox className="danger">{error.message}</MessageBox>
			) : (
				<div className="col-2">
					<div className="card card-body">
						<h1>Order Details</h1>
						<h4>Order Number: {orderDetails._id}</h4>
						<h4>Created at: {getDate(orderDetails.createdAt)}</h4>
						<div className="row top">
							<div className="col-2">
								<div className="card card-body">
									<h1>Credentials</h1>
									<p>
										<b>Full Name:</b>{" "}
										{orderDetails.shippingAddress.fullName}
									</p>
									<p>
										<b>Address:</b>{" "}
										{orderDetails.shippingAddress.address + ", "}
										{orderDetails.shippingAddress.postalCode + ", "}
										<br />
										{orderDetails.shippingAddress.city + ", "}
										{orderDetails.shippingAddress.country}
									</p>
								</div>
								<div className="card card-body">
									<h1>Products</h1>
									{orderDetails.orderItems.map((item, idx) => {
										return (
											<div
												key={idx}
												className="card card-body row top">
												<div className="col-1">
													<h4>{item.name}</h4>
													<p>Price:{item.price}</p>
													<p>Qunatity:{item.qty}</p>
												</div>
												<div className=" col-min">
													<img
														alt={item.name}
														className="medium"
														src={item.image}></img>
												</div>
											</div>
										);
									})}
								</div>
							</div>
							<div className="card card-body col-1">
								<h1>Payment</h1>
								<p>
									<b>Payment Method:</b>
									{" " + orderDetails.paymentMethod.toUpperCase()}
								</p>
								<p>
									<b>Item Price:</b>{" "}
									{orderDetails.itemsPrice.toFixed(2) + " €"}
								</p>
								<p>
									<b>Shipping Price:</b>{" "}
									{orderDetails.shippingPrice.toFixed(2) + " €"}
								</p>
								<p>
									<b>Tax Price:</b>{" "}
									{orderDetails.taxPrice.toFixed(2) + " €"}
								</p>
								<h2>
									<b>Total Price: </b>{" "}
									{orderDetails.totalPrice.toFixed(2) + " €"}
								</h2>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default OrderScreen;
