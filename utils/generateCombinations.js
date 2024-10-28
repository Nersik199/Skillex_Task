function generateCombinations(items, length) {
	const uniquePrefixes = [];
	const result = [];

	for (const item of items) {
		if (!uniquePrefixes.includes(item[0])) {
			uniquePrefixes.push(item[0]);
		}
	}

	const filteredItems = uniquePrefixes.map(prefix =>
		items.filter(item => item[0] === prefix)
	);

	function helper(path, start) {
		if (path.length === length) {
			result.push([...path]);
			return;
		}

		for (let i = start; i < filteredItems.length; i++) {
			for (const item of filteredItems[i]) {
				helper([...path, item], i + 1);
			}
		}
	}

	helper([], 0);
	return result;
}

export default generateCombinations;
