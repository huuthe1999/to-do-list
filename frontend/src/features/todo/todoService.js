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

const updateTodo = async (id, todo) => {
	// const res = await AXIOS_INSTANCE.put(`${END_POINT}/${id}`, todo);
	// return res.data;
	return AXIOS_INSTANCE.put(`${END_POINT}/${id}?check=${true}`, todo);
};

const deleteTodo = async id => {
	const res = await AXIOS_INSTANCE.delete(`${END_POINT}/${id}`);
	return res.data;
};

const todoService = {
	createTodo,
	updateTodo,
	getTodoList,
	filterTodoListByToday,
	filterTodoListByTomorrow,
	filterTodoListByWeek,
	deleteTodo,
};

export default todoService;
