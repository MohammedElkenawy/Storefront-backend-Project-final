import { createUser, findUser, index } from "../../models/User";

describe("User Queries", () => {
	it("findUser should return the product of the passed ID", async () => {
		const result = await findUser(1);
		expect(result.id).toBe(1);
	});

	it("createUser should create a new product with the passed values", async () => {
		const user = {
			firstName: "Marco",
			lastName: "Reus",
			password: "Dortmund11",
		};
		const result = await createUser(user);

		expect({
			firstName: result.firstName,
			lastName: result.lastName,
		}).toEqual({
			firstName: user.firstName,
			lastName: user.lastName,
		});
	});

	it("index should return all users", async () => {
		const result = await index();
		expect(result).toBeDefined();
	});
});
