const { AXIOS_INSTANCE } = require('../../config/api');
const END_POINT = '/projects';

const getProjectList = async () => {
	const res = await AXIOS_INSTANCE.get(END_POINT);
	return res.data;
};

const createProject = async project => {
	const res = await AXIOS_INSTANCE.post(END_POINT, project);
	return res.data;
};

const updateProject = async (id, updatedProject) => {
	const res = await AXIOS_INSTANCE.put(`${END_POINT}/${id}`, updatedProject);
	return res.data;
};

const deleteProject = async id => {
	const res = await AXIOS_INSTANCE.delete(`${END_POINT}/${id}`);
	return res.data;
};

const projectService = {
	getProjectList,
	createProject,
	updateProject,
	deleteProject,
};

export default projectService;
