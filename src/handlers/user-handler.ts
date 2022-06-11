import { Request, Response } from "express";
import jwt from "jsonwebtoken";

import { User } from "../types/interfaces";
import hashPassword from "../utils/bcrypt";
import { createUser, findUser, index } from "../models/User";

export const getUser = async (req: Request, res: Response) => {
	const id = +req.params.id;
	if (isNaN(id)) return res.sendStatus(400);
	try {
		const user = await findUser(id);
		return res.status(200).json(user);
	} catch (err) {
		return res.status(400).json(err);
	}
};

export const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await index();
		return res.status(200).json(users);
	} catch (err) {
		return res.status(500);
	}
};

export const createNewUser = async (req: Request, res: Response) => {
	if (
		!req.body ||
		!req.body.firstname ||
		!req.body.lastname ||
		!req.body.password
	)
		return res.sendStatus(400);

	const hashed = await hashPassword(req.body.password);

	const user: User = {
		firstName: req.body.firstname,
		lastName: req.body.lastname,
		password: hashed,
	};

	try {
		const newUser = await createUser(user);

		const JWT = process.env.JWT as string;
		const token = jwt.sign({ user: newUser }, JWT);
		return res.status(200).json(token);
	} catch (err) {
		return res.status(500);
	}
};
