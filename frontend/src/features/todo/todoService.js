const { AXIOS_INSTANCE } = require('../../config/api');
const END_POINT = '/todos';

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
};

export default todoService;
