const { AXIOS_INSTANCE } = require('../../config/api');
const END_POINT = '/todos';

const filterTodoListByToday = () => {
	return AXIOS_INSTANCE.get(`${END_POINT}/filter?today=${true}`);
};

const filterTodoListByTomorrow = () => {
	return AXIOS_INSTANCE.get(`${END_POINT}/filter?tomorrow=${true}`);
};

const filterTodoListByWeek = () => {
	return AXIOS_INSTANCE.get(`${END_POINT}/filter?week=${true}`);
};
const getTodoList = id => {
	return AXIOS_INSTANCE.get(`${END_POINT}/${id}`);
};

const createTodo = (id, newTodo) => {
	return AXIOS_INSTANCE.post(`${END_POINT}/${id}`, newTodo);
};

const updateTodo = (id, todo) => {
	// return  AXIOS_INSTANCE.put(`${END_POINT}/${id}`, todo);
	//
	return AXIOS_INSTANCE.put(`${END_POINT}/${id}?check=${true}`, todo);
};

const deleteTodo = id => {
	return AXIOS_INSTANCE.delete(`${END_POINT}/${id}`);
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
