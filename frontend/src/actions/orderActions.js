import Axios from "axios";
import { CART_EMPTY } from "../constants/cartConstants";
import {
	ORDER_CREATE_FAIL,
	ORDER_CREATE_REQUEST,
	ORDER_CREATE_SUCCESS,
	ORDER_DETAIL_FAIL,
	ORDER_DETAIL_REQUEST,
	ORDER_DETAIL_SUCCESS,
} from "../constants/orderConstants";

export const createOrder = (order) => async (dispatch, getState) => {
	dispatch({ type: ORDER_CREATE_REQUEST, payload: order });
	try {
		const {
			userSignin: { userInfo },
		} = getState();

		const { data } = await Axios.post("api/orders/", order, {
			headers: {
				authorization: `Bearer ${userInfo.token}`,
			},
		});

		dispatch({ type: ORDER_CREATE_SUCCESS, payload: data.order });
		dispatch({ type: CART_EMPTY });
		localStorage.removeItem("cartItems");
	} catch (error) {
		dispatch({
			type: ORDER_CREATE_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
export const detailOrder = (orderID, userID) => async (dispatch, getState) => {
	dispatch({
		type: ORDER_DETAIL_REQUEST,
		payload: orderID,
	});
	try {
		const {
			userSignin: { userInfo },
		} = getState();
		const { data } = await Axios.get(`/api/orders/${orderID}`, {
			headers: {
				authorization: `Bearer ${userInfo.token}`,
			},
		});
		console.log(userID, data.user);
		if (userID === data.user) {
			dispatch({ type: ORDER_DETAIL_SUCCESS, payload: data });
		} else {
			dispatch({
				type: ORDER_DETAIL_FAIL,
				payload: { message: "no order found" },
			});
		}
	} catch (error) {
		dispatch({
			type: ORDER_DETAIL_FAIL,
			payload:
				error.response && error.response.data.message
					? error.response.data.message
					: error.message,
		});
	}
};
