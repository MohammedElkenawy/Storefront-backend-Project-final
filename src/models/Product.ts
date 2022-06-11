import pool from "../controllers/postgres-controller";
import { Product } from "../types/interfaces";

export const createProduct = async (product: Product): Promise<Product> => {
	const { name, price } = product;
	const query = `
    INSERT INTO products (name, price)
    VALUES($1, $2)

    RETURNING *
  `;

	try {
		const result = await pool.query(query, [name, price]);
		return result.rows[0];
	} catch (e) {
		throw new Error("can't create product");
	}
};

export const findProduct = async (id: number): Promise<Product> => {
	const query = `
    SELECT * 
    FROM products
    WHERE products.id = $1
  `;

	try {
		const result = await pool.query(query, [id]);
		return result.rows[0];
	} catch (e) {
		throw new Error("can't find products");
	}
};

export const index = async (): Promise<Product[]> => {
	const query = `
    SELECT *
    FROM products
  `;
	try {
		const result = await pool.query(query);
		return result.rows;
	} catch (e) {
		throw new Error("can't find products");
	}
};
