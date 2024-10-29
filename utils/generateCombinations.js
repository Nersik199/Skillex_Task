function generateCombinations(items, length) {
	const result = [];
	const upi = []; // uniquePrefixItems

	items.forEach(item => {
		const prefix = item[0];
		const prefixGroup = upi.find(group => {
			group[0]?.[0] === prefix;
		});
		prefixGroup ? prefixGroup.push(item) : upi.push([item]);
	});

	function helper(path, start) {
		if (path.length === length) {
			result.push([...path]);
			return;
		}
		for (let i = start; i < upi.length; i++) {
			for (const item of upi[i]) {
				helper([...path, item], i + 1);
			}
		}
	}
	helper([], 0);
	return result;
}

export default generateCombinations;
