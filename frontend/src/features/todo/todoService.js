const { AXIOS_INSTANCE } = require('../../config/api');
const END_POINT = '/todos';

const createTodo = async (id, newTodo) => {
	const res = await AXIOS_INSTANCE.post(`${END_POINT}/${id}`, newTodo);
	return res.data;
};

const todoService = {
	createTodo,
};

export default todoService;
