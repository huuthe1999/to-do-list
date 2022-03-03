const { AXIOS_INSTANCE } = require('../../config/api');
const END_POINT = '/todos';

const filterTodoListByToday = async () => {
	const res = await AXIOS_INSTANCE.get(`${END_POINT}/filter?today=${true}`);
	return res.data;
};

const filterTodoListByTomorrow = async () => {
	const res = await AXIOS_INSTANCE.get(
		`${END_POINT}/filter?tomorrow=${true}`,
	);
	return res.data;
};

const filterTodoListByWeek = async () => {
	const res = await AXIOS_INSTANCE.get(`${END_POINT}/filter?week=${true}`);
	return res.data;
};
const getTodoList = async id => {
	const res = await AXIOS_INSTANCE.get(`${END_POINT}/${id}`);
	return res.data;
};

const createTodo = async (id, newTodo) => {
	const res = await AXIOS_INSTANCE.post(`${END_POINT}/${id}`, newTodo);
	return res.data;
};

const todoService = {
	createTodo,
	getTodoList,
	filterTodoListByToday,
	filterTodoListByTomorrow,
	filterTodoListByWeek,
};

export default todoService;
