import generateCombinations from '../utils/generateCombinations.js';
import dbModels from '../models/db.generator.js';

export default {
	generate: async (req, res) => {
		try {
			const { items, length } = req.body;

			if (!Array.isArray(items) || typeof length !== 'number') {
				return res.status(400).json({ messages: 'Invalid input' });
			}

			await dbModels.createItem(items);

			const combinations = generateCombinations(items, length);

			const data = await dbModels.createCombinations(combinations);
			const combinationId = data.insertId;

			await dbModels.createResponse(combinationId, combinations);

			res.status(200).json({ id: combinationId, combinations });
		} catch (error) {
			console.log(error);
			res.status(500).json({ error: error.message });
		}
	},
};
