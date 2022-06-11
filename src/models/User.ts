import pool from "../controllers/postgres-controller";
import { User } from "../types/interfaces";

export const createUser = async (newUser: User): Promise<User> => {
	const query = `
    INSERT INTO users (first_name, last_name, password)
    VALUES($1, $2, $3) 

    RETURNING users.id, users.first_name, users.last_name
    `;

	try {
		const result = await pool.query(query, [
			newUser.firstName,
			newUser.lastName,
			newUser.password,
		]);

		const { id, first_name: firstName, last_name: lastName } = result.rows[0];

		const user = {
			id,
			firstName,
			lastName,
		};

		return user;
	} catch (e) {
		throw new Error("can't create user");
	}
};

export const index = async (): Promise<User[]> => {
	const query = `
    SELECT 
    users.id as id,
    users.first_name as firstName,
    users.last_name as lastName

    FROM users
  `;

	try {
		const result = await pool.query(query);
		return result.rows;
	} catch (e) {
		throw new Error("can't get users");
	}
};

export const findUser = async (id: number): Promise<User> => {
	const query = `
    SELECT
    users.id as id,
    users.first_name as firstName,
    users.last_name as lastName

    FROM users

    WHERE users.id = $1
  `;

	try {
		const result = await pool.query(query, [id]);
		return result.rows[0];
	} catch (e) {
		throw new Error("can't get user");
	}
};
