import db from '../clients/db.mysql.js';

export default {
	createItem: async name => {
		try {
			await db.execute('INSERT INTO items (name) VALUES (?)', [
				JSON.stringify(name),
			]);
		} catch (error) {
			console.log(error);
		}
	},

	createCombinations: async combinations => {
		try {
			const [result] = await db.execute(
				'INSERT INTO combinations (combination) VALUES (?)',
				[JSON.stringify(combinations)]
			);
			return result;
		} catch (error) {
			console.log(error);
		}
	},
	createResponse: async (combinationId, data) => {
		try {
			await db.execute(
				'INSERT INTO responses (combinationId, response) VALUES (?, ?)',
				[combinationId, JSON.stringify(data)]
			);
		} catch (error) {
			console.log(error);
		}
	},
};