import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	defaultProject: 'Today',
	selectProject: 'Today',
};

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		setSelectProject: (state, action) => {
			state.selectProject = action.payload;
		},
	},
});

export const { setSelectProject } = projectSlice.actions;

export const selectProject = state => state.project.selectProject;
export const defaultProject = state => state.project.defaultProject;

export default projectSlice.reducer;
