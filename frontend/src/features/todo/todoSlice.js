import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import todoService from './todoService';
const initialState = {
	todoList: [],
	todo: null,
	error: null,
};

export const createTodo = createAsyncThunk(
	'todo/createTodo',
	async ({ id, newTodo }, thunkAPI) => {
		try {
			const res = await todoService.createTodo(id, newTodo);
			const projectList = thunkAPI.getState().project.projectList;
			const indexProject = projectList.findIndex(
				project => project._id === id,
			);
			if (indexProject !== -1) {
				projectList[indexProject].todoListId = [
					...projectList[indexProject].todoListId,
					res._id,
				];
			}

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
export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		setSelectTodo: (state, action) => {},
		setTodoList: (state, action) => {},
	},
	extraReducers: {
		[createTodo.fulfilled]: (state, action) => {
			console.log(action.payload);
			state.todo = action.payload;
		},
		[createTodo.rejected]: (state, action) => {
			console.log(action.payload);
			state.error = action.payload;
		},
	},
});

export const { setSelectTodo, setTodoList } = todoSlice.actions;

export const selectTodo = state => state.todo.selected;
export const selectTodoList = state => state.todo.todoList;

export default todoSlice.reducer;
