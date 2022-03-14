import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { defaultTodoList } from '../../assets/data';
import { updateTodoList } from '../todo/todoSlice';
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
			return res.data;
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

export const getProject = createAsyncThunk(
	'project/getProject',
	async (id, thunkAPI) => {
		try {
			const res = await projectService.getProject(id);
			return res.data;
		} catch (error) {
			const message =
				error.response?.data?.message ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const createProject = createAsyncThunk(
	'project/createProject',
	async (project, thunkAPI) => {
		try {
			const res = await projectService.createProject(project);
			return res.data;
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
			thunkAPI.dispatch(updateTodoList(res));
			return res.data;
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
			// thunkAPI.dispatch(setTodoList([]));
			return res.data;
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
		setDefaultProject: (state, action) => {
			state.defaultProject = action.payload;
		},
		setSelectProject: (state, action) => {
			state.selectProject = action.payload;
		},
		setProjectList: (state, action) => {
			state.projectList = action.payload;
		},
		addTodoToProjectList: (state, action) => {
			const { projectId, _id } = action.payload;
			const projectIndex = state.projectList.findIndex(
				project => project._id === projectId,
			);

			if (projectIndex !== -1) {
				state.projectList[projectIndex].todoListId.push(_id);
			}
		},
		removeTodoFromProjectList: (state, action) => {
			const { projectId, _id } = action.payload;
			const projectIndex = state.projectList.findIndex(
				project => project._id === projectId,
			);
			if (projectIndex !== -1) {
				const todoIndex = state.projectList[
					projectIndex
				].todoListId.findIndex(todoId => todoId === _id);
				if (todoIndex !== -1) {
					state.projectList[projectIndex].todoListId.splice(
						todoIndex,
						1,
					);
				}
			}
		},
	},
	extraReducers: {
		[getProjectList.fulfilled]: (state, action) => {
			state.projectList = action.payload;
		},
		[getProjectList.rejected]: (state, action) => {
			state.error = action.payload;
		},
		[getProject.fulfilled]: (state, action) => {
			const { _id } = action.payload;
			const indexProject = state.projectList.findIndex(
				project => project._id === _id,
			);

			if (indexProject !== -1) {
				state.projectList[indexProject] = action.payload;
			}
		},
		[getProject.rejected]: (state, action) => {
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
			const projectIndex = state.projectList.findIndex(
				p => p._id === _id,
			);
			if (projectIndex !== -1) {
				state.projectList[projectIndex].name = name;
				state.projectList[projectIndex].color = color;
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
				if (defaultTodoList.includes(state.selectProject)) {
					return;
				}
				state.selectProject = 'Today';
			}
		},
		[deleteProject.rejected]: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const {
	setDefaultProject,
	setSelectProject,
	setProjectList,
	addTodoToProjectList,
	removeTodoFromProjectList,
} = projectSlice.actions;

export const selectProject = state => state.project.selectProject;
export const selectDefaultProject = state => state.project.defaultProject;
export const defaultProject = state => state.project.defaultProject;
export const selectProjectList = state => state.project.projectList;

export default projectSlice.reducer;
