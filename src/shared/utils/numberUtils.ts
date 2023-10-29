/**
 * FormatNumber function formats the value to string based on below conditions:
 * 1. If value is an integer, returns the value
 * 2. If value is a floating number with many digits after decimal, rounds it off to 3 decimal points
 * 3. If value is a floating number with digits less than 3 after decimal, return the value
 */
const formatNumber = (value: number): string => {
	if (Number.isInteger(value)) return value.toString();

	const roundedNumber = value.toFixed(3);
	return parseFloat(roundedNumber).toString();
};

export const calculateMean = (data: number[]): string => {
	if (data.length === 0) return "-";

	const sum: number = data.reduce((acc, val) => acc + val, 0);
	return formatNumber(sum / data.length);
};

export const calculateMode = (data: number[]): string => {
	if (data.length === 0) return "-";

	const frequency: Record<string, number> = {};
	let maxCount: number = 1;

	for (let item of data) {
		if (frequency[item]) frequency[item]++;
		else frequency[item] = 1;

		if (frequency[item] > maxCount) maxCount = frequency[item];
	}

	// if all the elements appears exactly the same time as the highest frequency in the dataset then there is no mode
	const nonUniqueMode: boolean = Object.values(frequency).every(
		(num) => num === maxCount
	);
	if (nonUniqueMode) return "-";

	// There can be more than one mode if highest frequency is observed more than once
	const modes: string[] = Object.keys(frequency)
		.filter((key) => frequency[key] === maxCount)
		.map((mode) => formatNumber(+mode));

	return modes.join(", ");
};

export const calculateMedian = (data: number[]): string => {
	if (data.length === 0) return "-";

	data.sort((a, b) => {
		return a - b;
	});

	const totalItems = data.length;
	const mid = Math.floor(totalItems / 2);

	if (totalItems % 2 === 0)
		// Even number of items, return mid and item before it
		return formatNumber((data[mid - 1] + data[mid]) / 2);

	return formatNumber(data[mid]);
};
