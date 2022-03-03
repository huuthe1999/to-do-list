exports.formatDate = isTomorrow => {
	if (isTomorrow) {
		return;
	}

	const currentDate = new Date();
	currentDate.setHours(0, 0, 0, 0);
	const startDate = new Date(currentDate.getTime());
	currentDate.setDate(currentDate.getDate() + 7);
	const addSevenDays = new Date(currentDate.getTime());
	return { startDate, addSevenDays };
};
