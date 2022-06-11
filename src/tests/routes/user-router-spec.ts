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

describe("Testing user endpoints", async () => {
	it("GET /user/:id", async () => {
		const response = await request
			.get("/user/1")
			.set("Authorization", `Bearer ${token}`);

		expect(response.statusCode).toBe(200);
	});

	it("POST /user", async () => {
		const newUser = {
			firstname: "Marco",
			lastname: "Reus",
			password: "Dortmund11",
		};
		const response = await request.post("/user").send(newUser);

		expect(response.statusCode).toBe(200);
	});

	it("GET /user/all", async () => {
		const response = await request
			.get("/user/all")
			.set("Authorization", `Bearer ${token}`);

		expect(response.statusCode).toBe(200);
	});
});
