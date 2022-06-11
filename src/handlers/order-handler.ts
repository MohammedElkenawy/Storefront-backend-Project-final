import { Request, Response } from "express";

import { findOrdersByUserId } from "../models/Order";

const getOrders = async (req: Request, res: Response) => {
	const user = req.params.id;

	if (!user || isNaN(+user)) return res.sendStatus(400);

	try {
		const orders = await findOrdersByUserId(+user);

		return res.status(200).json(orders);
	} catch (e) {
		return res.sendStatus(500);
	}
};

export default getOrders;
