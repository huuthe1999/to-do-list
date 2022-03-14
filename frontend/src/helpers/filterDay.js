export const sortTodoListByDay = (dayList, todoList) => {
	if (!todoList || todoList.length < 1) return [];
	return dayList.map(day => {
		return { todoByDay: todoList.filter(todo => todo.day === day), day };
	});
};

export const arrangeTodoListByDate = (sortTodoByDay, startDay) => {
	if (!sortTodoByDay || sortTodoByDay.length < 1) return [];
	return sortTodoByDay
		.slice(startDay)
		.concat(sortTodoByDay.slice(0, startDay));
};
