import { findOrdersByUserId } from "../../models/Order";

describe("Order Queries", () => {
	it("findOrdersByUserId should return orders of a given user ID", async () => {
		const result = await findOrdersByUserId(1);

		expect(result[0].userId).toBe(1);
	});
});
