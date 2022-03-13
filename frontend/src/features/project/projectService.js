const { AXIOS_INSTANCE } = require('../../config/api');
const END_POINT = '/projects';

const getProjectList = async () => {
	return await AXIOS_INSTANCE.get(END_POINT);
};

const getProject = async id => {
	return await AXIOS_INSTANCE.get(`${END_POINT}?id=${id}`);
};

const createProject = async project => {
	return await AXIOS_INSTANCE.post(END_POINT, project);
};

const updateProject = async (id, updatedProject) => {
	return await AXIOS_INSTANCE.put(`${END_POINT}/${id}`, updatedProject);
};

const deleteProject = async id => {
	return await AXIOS_INSTANCE.delete(`${END_POINT}/${id}`);
};

const projectService = {
	getProjectList,
	getProject,
	createProject,
	updateProject,
	deleteProject,
};

export default projectService;
