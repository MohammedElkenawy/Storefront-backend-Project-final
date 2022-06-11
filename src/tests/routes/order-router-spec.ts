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

describe("Testing order endpoints", async () => {
	it("GET /order/:id", async () => {
		const response = await request
			.get("/order/1")
			.set("Authorization", `Bearer ${token}`);

		expect(response.statusCode).toBe(200);
	});
});
