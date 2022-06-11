import { hash } from "bcrypt";

const SALT = process.env.SALT as string;

const hashPassword = async (password: string): Promise<string> =>
	hash(password, +SALT);

export default hashPassword;
