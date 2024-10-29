import generateCombinations from '../utils/generateCombinations.js';
import pool from '../clients/db.mysql.js';
import dbModels from '../models/db.generator.js';

let connection = await pool.getConnection();

export default {
	generate: async (req, res) => {
		try {
			const itemPrefixes = ['A', 'B', 'C']; // 'X', 'Y', 'Z'
			const formattedItems = [];

			const { items, length } = req.body;

			if (!Array.isArray(items) || typeof length !== 'number') {
				return res.status(400).json({ message: 'Invalid input' });
			}

			for (let i = 0; i < items.length; i++) {
				const num = items[i];
				if (!itemPrefixes[i]) {
					return res.status(400).json({
						message: `Invalid i ${i}: itemPrefixes does not have a corresponding prefix.`,
					});
				}
				formattedItems.push(`${itemPrefixes[i]}${num}`);
			}
			const combinations = generateCombinations(formattedItems, length);

			await connection.beginTransaction();

			await dbModels.createItem(formattedItems);
			const { insertId: combinationId } = await dbModels.createCombinations(
				combinations
			);
			await dbModels.createResponse(combinationId, combinations);

			await connection.commit();

			res.status(200).json({ id: combinationId, combinations });
		} catch (error) {
			if (connection) await connection.rollback();
			console.error('err transaction', error);
			res.status(500).json({ error: 'Error saving combinations' });
		} finally {
			if (connection) connection.release();
		}
	},
};
