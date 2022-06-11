import { createProduct, findProduct, index } from "../../models/Product";

describe("Product Queries", () => {
	it("findProduct should return the product of the passed ID", async () => {
		const result = await findProduct(1);
		expect(result.id).toBe(1);
	});

	it("createProduct should create a new product with the passed values", async () => {
		const product = {
			name: "Mouse Bungee",
			price: 5,
		};
		const result = await createProduct(product);

		const expected = {
			name: product.name,
			price: `$${product.price}.00`,
		};

		expect({
			name: result.name,
			price: result.price.toString(),
		}).toEqual(expected);
	});

	it("index should return all products", async () => {
		const result = await index();
		expect(result).toBeDefined();
	});
});
