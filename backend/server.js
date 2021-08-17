import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRouter from "./routers/productRouter.js";
import userRouter from "./routers/userRouter.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(
	process.env.MONGODB_URL ||
		"mongodb+srv://admin:asd123asd@cluster0.vr97q.mongodb.net/testShop123?retryWrites=true&w=majority",
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
);

app.get("/", (request, response) => {
	response.send("server is ready");
});

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

// app.get("/api/products/:id", (request, response) => {
// 	const product = data.products.find((x) => x._id === request.params.id);
// 	if (product) {
// 		response.send(product);
// 	} else {
// 		response.status(404).send({ message: "Product not Found" });
// 	}
// });

app.use((err, request, response, next) => {
	response.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
});
