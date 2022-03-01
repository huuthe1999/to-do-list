import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import projectService from './projectService';
const initialState = {
	defaultProject: 'Today',
	selectProject: 'Today',
	projectList: [],
	error: null,
};

export const getProjectList = createAsyncThunk(
	'project/getProjectList',
	async (_, thunkAPI) => {
		try {
			const res = await projectService.getProjectList();
			return res;
		} catch (error) {
			const message =
				error.response?.data?.message ||
				error.message ||
				error.toString();
			// (error.response &&
			// 	error.response.data &&
			// 	error.response.data.message) ||
			// error.message ||
			// error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const createProject = createAsyncThunk(
	'project/createProject',
	async (project, thunkAPI) => {
		try {
			const res = await projectService.createProject(project);
			return res;
		} catch (error) {
			const message =
				error.response?.data?.message ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const updateProject = createAsyncThunk(
	'project/updateProject',
	async ({ id, updatedProject }, thunkAPI) => {
		try {
			const res = await projectService.updateProject(id, updatedProject);
			return res;
		} catch (error) {
			const message =
				error.response?.data?.message ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const deleteProject = createAsyncThunk(
	'project/deleteProject',
	async (id, thunkAPI) => {
		try {
			const res = await projectService.deleteProject(id);
			return res;
		} catch (error) {
			const message =
				error.response?.data?.message ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		setSelectProject: (state, action) => {
			state.selectProject = action.payload;
		},
		setProjectList: (state, action) => {
			state.projectList = action.payload;
		},
	},
	extraReducers: {
		[getProjectList.fulfilled]: (state, action) => {
			state.projectList = action.payload;
		},
		[getProjectList.rejected]: (state, action) => {
			state.error = action.payload;
		},
		[createProject.fulfilled]: (state, action) => {
			state.selectProject = action.payload;
			state.projectList.unshift(action.payload);
		},
		[createProject.rejected]: (state, action) => {
			state.error = action.payload;
		},
		[updateProject.fulfilled]: (state, action) => {
			state.selectProject = action.payload;
			const { _id, name, color } = action.payload;
			const existingProject = state.projectList.find(p => p._id === _id);
			if (existingProject) {
				existingProject.name = name;
				existingProject.color = color;
			}
		},
		[updateProject.rejected]: (state, action) => {
			state.error = action.payload;
		},
		[deleteProject.fulfilled]: (state, action) => {
			const index = state.projectList.findIndex(
				p => p._id === action.payload.id,
			);
			if (index !== -1) {
				state.projectList.splice(index, 1);
				state.selectProject = state.projectList[0];
			}
		},
		[deleteProject.rejected]: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const { setSelectProject, setProjectList } = projectSlice.actions;

export const selectProject = state => state.project.selectProject;
export const defaultProject = state => state.project.defaultProject;
export const selectProjectList = state => state.project.projectList;

export default projectSlice.reducer;
