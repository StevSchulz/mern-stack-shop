import express, { response } from "express";
import expressAsyncHandler from "express-async-handler";
import data from "../data.js";
import Product from "../models/productModel.js";

const productRouter = express.Router();

productRouter.get(
	"/",
	expressAsyncHandler(async (request, response) => {
		const products = await Product.find({});
		response.send(products);
	})
);

productRouter.get(
	"/seed",
	expressAsyncHandler(async (request, response) => {
		// await User.remove({});
		const createdProducts = await Product.insertMany(data.products);
		response.send({ createdProducts });
	})
);

productRouter.get(
	"/:id",
	expressAsyncHandler(async (request, response) => {
		const product = await Product.findById(request.params.id);
		if (product) {
			response.send(product);
		} else {
			response.status(404).send({ message: "Product Not Found" });
		}
	})
);

export default productRouter;