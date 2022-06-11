import supertest from "supertest";
import app from "../../app";
import jwt from "jsonwebtoken";

const request = supertest(app);

const user = {
	firstName: "Marco",
	lastName: "Reus",
	password: "Dortmund11",
};

const token = jwt.sign({ user }, process.env.JWT as string);

describe("Testing product endpoints", async () => {
	it("GET /product/:id", async () => {
		const response = await request.get("/product/1");

		expect(response.statusCode).toBe(200);
	});

	it("POST /product", async () => {
		const product = {
			name: "Mouse Bungee",
			price: 5,
		};

		const response = await request
			.post("/product")
			.send(product)
			.set("Authorization", `Bearer ${token}`);

		expect(response.statusCode).toBe(200);
	});

	it("GET /product/all", async () => {
		const response = await request.get("/product/all");

		expect(response.statusCode).toBe(200);
	});
});
