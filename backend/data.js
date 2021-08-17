import bcrypt from "bcryptjs";

const data = {
	users: [
		{
			name: "Steven",
			email: "admin@example.com",
			password: bcrypt.hashSync("asd123asd", 8),
			isAdmin: true,
		},
		{
			name: "Vivien",
			email: "vivien@example.com",
			password: bcrypt.hashSync("asd123asd", 8),
			isAdmin: false,
		},
	],
	products: [
		{
			name: "Blue Shirt",
			category: "Shirts",
			image: "https://m.media-amazon.com/images/I/810bQoyabNL._AC_UX522_.jpg",
			brand: "Nike",
			price: 100,
			countInStock: 50,
			rating: 3.5,
			numReviews: 10,
			description: "high quality product",
		},
		{
			name: "Adidas Fit Shirt",
			category: "Shirts",
			image: "https://img01.ztat.net/article/spp-media-p1/4c33478bf5b33de0a50ef11542d78ad8/28c5c172c4414be08cf548d40def2e81.jpg?imwidth=762&filter=packshot",
			brand: "Adidas",
			price: 50,
			countInStock: 20,
			rating: 4.5,
			numReviews: 8,
			description: "low quality product",
		},
		{
			name: "Green Shirt",
			category: "Shirts",
			image: "https://img01.ztat.net/article/spp-media-p1/335ac41151f335498f832f6316b9b809/a5376e4c1d2c4eacb9af2169295be864.jpg?imwidth=1800",
			brand: "Nike",
			price: 120,
			countInStock: 0,
			rating: 3,
			numReviews: 2,
			description: "high quality product without print",
		},
		{
			name: "G-Star Fit Shirt",
			category: "Shirts",
			image: "https://img1.g-star.com/product/c_fill,f_auto,h_630,q_80/v1618310647/D15104-336-110-M04/g-star-raw-graphic-4-t-shirt-wei.jpg",
			brand: "G-Star",
			price: 150,
			countInStock: 5,
			rating: 5,
			numReviews: 7,
			description: "Cool design imo",
		},
		{
			name: "Grey Pants",
			category: "Pants",
			image: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cf2f4a8a-ba92-489f-b37d-ce50f3c21a7a/sportswear-tech-fleece-herren-jogger-xZp1BV.png",
			brand: "Nike",
			price: 40,
			countInStock: 5,
			rating: 5,
			numReviews: 10,
			description: "perfect fit",
		},
		{
			name: "Green Pants",
			category: "Pants",
			image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/66ac0ea439a949399b71ac84011a4736_9366/Essentials_French_Terry_Tapered_3-Streifen_Hose_Schwarz_GK8829_23_hover_model.jpg",
			brand: "Adidas",
			price: 30,
			countInStock: 0,
			rating: 3.0,
			numReviews: 3,
			description: "good fit",
		},
	],
};

export default data;
