import { Request, Response } from "express";
import { createProduct, findProduct, index } from "../models/Product";
import { Product } from "../types/interfaces";

export const getAllProducts = async (req: Request, res: Response) => {
	try {
		const products = await index();
		res.json(products);
	} catch (e) {
		res.send(500);
	}
};

export const getProductById = async (req: Request, res: Response) => {
	const id = +req.params.id;

	if (isNaN(id)) return res.sendStatus(400);

	try {
		const product = await findProduct(id);

		res.json(product);
	} catch (e) {
		res.send(500);
	}
};

export const createNewProduct = async (req: Request, res: Response) => {
	const { name, price } = req.body;

	if (!name || !price) return res.sendStatus(400);

	const product: Product = {
		name,
		price,
	};

	try {
		const newProduct = await createProduct(product);
		res.json(newProduct);
	} catch (e) {
		res.sendStatus(500);
	}
};
