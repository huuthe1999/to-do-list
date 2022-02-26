import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	defaultProject: 'Today',
	selectProject: 'Today',
	projectList: [],
};

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		setSelectProject: (state, action) => {
			state.selectProject = action.payload;
		},
		setProjectList: (state, action) => {
			console.log('setProjectList', action);
			state.projectList = action.payload;
		},
	},
});

export const { setSelectProject, setProjectList } = projectSlice.actions;

export const selectProject = state => state.project.selectProject;
export const defaultProject = state => state.project.defaultProject;
export const projects = state => state.project.projectList;

export default projectSlice.reducer;
