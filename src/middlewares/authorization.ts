import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const isAuthorized = (req: Request, res: Response, next: NextFunction) => {
	const JWT_SECRET = process.env.JWT;
	try {
		const authorizationHeader = req.headers.authorization as string;
		const token = authorizationHeader.split(" ")[1];
		jwt.verify(token, JWT_SECRET as string);
		next();
		return;
	} catch (err) {
		return res.status(401);
	}
};

export default isAuthorized;
