import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
dotenv.config();

const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

const dbConfig = {
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_DATABASE,
	waitForConnections: true,
	connectionLimit: 10,
	queueLimit: 0,
};

const pool = mysql.createPool(dbConfig);

export default pool;
