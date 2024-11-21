export const calculateDayDifference = (
	stDate: string,
	enDate: string
) => {
	// Convert timestamps to milliseconds
	const msPerDay = 24 * 60 * 60 * 1000;
	const timestamp1Ms = new Date(stDate).getTime();
	const timestamp2Ms = new Date(enDate).getTime();

	// Calculate the difference in milliseconds
	const timeDiffMs = Math.abs(timestamp1Ms - timestamp2Ms);

	// Convert the difference to days
	const dayDifference = Math.round(timeDiffMs / msPerDay);

	return dayDifference;
};
