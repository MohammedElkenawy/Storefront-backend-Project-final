import { Pool, PoolConfig } from "pg";

const { NODE_ENV, HOST, DB, TEST_DB, USER, PASSWORD } = process.env;

const config: PoolConfig = {
	host: HOST,
	database: NODE_ENV === "TEST" ? TEST_DB : DB,
	user: USER,
	password: PASSWORD,
};

const pool = new Pool(config);

export default pool;
