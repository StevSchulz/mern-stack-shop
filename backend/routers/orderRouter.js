import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";
import { isAuth } from "../utils.js";

const orderRouter = express.Router();

orderRouter.post(
	"/",
	isAuth,
	expressAsyncHandler(async (req, res) => {
		if (req.body.orderItems.length === 0) {
			res.status(400).send({ message: "cart is empty" });
		} else {
			const order = new Order({
				orderItems: req.body.orderItems,
				shippingAddress: req.body.shippingAddress,
				paymentMethod: req.body.paymentMethod,
				itemsPrice: req.body.itemsPrice,
				shippingPrice: req.body.shippingPrice,
				taxPrice: req.body.taxPrice,
				totalPrice: req.body.totalPrice,
				user: req.user._id,
			});
			const createdOrder = await order.save();
			res.status(201).send({
				message: "New Order Created",
				order: createdOrder,
			});
		}
	})
);

orderRouter.get(
	"/:id",
	isAuth,
	expressAsyncHandler(async (request, response) => {
		const order = await Order.findById(request.params.id);
		if (order) {
			response.send(order);
		} else {
			console.log(request);

			response.status(404).send({ message: "Order Not Found" });
		}
	})
);

export default orderRouter;
