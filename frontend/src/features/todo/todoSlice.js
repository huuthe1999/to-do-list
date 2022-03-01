import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import todoService from './todoService';
const initialState = {
	todoList: [],
	todo: null,
	error: null,
};

export const getTodoList = createAsyncThunk(
	'todo/getTodoList',
	async (id, thunkAPI) => {
		try {
			const res = await todoService.getTodoList(id);
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

export const createTodo = createAsyncThunk(
	'todo/createTodo',
	async ({ id, newTodo }, thunkAPI) => {
		try {
			const res = await todoService.createTodo(id, newTodo);
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
		setTodoList: (state, action) => {
			state.todoList = action.payload;
		},
	},
	extraReducers: {
		[getTodoList.fulfilled]: (state, action) => {
			state.todoList = action.payload;
		},
		[getTodoList.rejected]: (state, action) => {
			state.error = action.payload;
		},

		[createTodo.fulfilled]: (state, action) => {
			state.todoList.unshift(action.payload);
			state.todo = action.payload;
		},
		[createTodo.rejected]: (state, action) => {
			state.error = action.payload;
		},
	},
});

export const { setSelectTodo, setTodoList } = todoSlice.actions;

export const selectTodo = state => state.todo.selected;
export const selectTodoList = state => state.todo.todoList;

export default todoSlice.reducer;
