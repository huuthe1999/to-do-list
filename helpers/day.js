exports.formatDate = type => {
	const currentDate = new Date();
	currentDate.setHours(0, 0, 0, 0);

	if (type === 'Tomorrow') {
		currentDate.setDate(currentDate.getDate() + 1);
		const startDate = new Date(currentDate.getTime());
		currentDate.setDate(currentDate.getDate() + 1);
		const endDate = new Date(currentDate.getTime());
		return { startDate, endDate };
	}
	if (type === 'Week') {
		const startDate = new Date(currentDate.getTime());
		currentDate.setDate(currentDate.getDate() + 7);
		const endDate = new Date(currentDate.getTime());
		return { startDate, endDate };
	}
	const startDate = new Date(currentDate.getTime());
	const endDate = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000);
	return { startDate, endDate };
};
