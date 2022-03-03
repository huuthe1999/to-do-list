import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import todoService from './todoService';
const initialState = {
	todoListByToday: [],
	todoListByTomorrow: [],
	todoListByDay: [],
	todoList: [],
	todo: {},
	error: null,
};

export const filterTodoListByToday = createAsyncThunk(
	'todo/filterTodoListByToday',
	async (_, thunkAPI) => {
		try {
			const res = await todoService.filterTodoListByToday();
			return res;
		} catch (error) {
			const message =
				error?.response?.data?.message ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const filterTodoListByTomorrow = createAsyncThunk(
	'todo/filterTodoListByTomorrow',
	async (_, thunkAPI) => {
		try {
			const res = await todoService.filterTodoListByTomorrow();
			return res;
		} catch (error) {
			const message =
				error?.response?.data?.message ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

export const filterTodoListByWeek = createAsyncThunk(
	'todo/filterTodoListByWeek',
	async (_, thunkAPI) => {
		try {
			const res = await todoService.filterTodoListByWeek();
			return res;
		} catch (error) {
			const message =
				error?.response?.data?.message ||
				error.message ||
				error.toString();
			return thunkAPI.rejectWithValue(message);
		}
	},
);

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
		setSelectTodo: (state, action) => {
			state.todo = action.payload;
		},
		setTodoList: (state, action) => {
			state.todoList = action.payload;
		},
		filterTodoList: (state, action) => {
			const id = action.payload;
			state.todoListByToday = state.todoListByToday.filter(
				todo => todo._id !== id,
			);
			state.todoListByTomorrow = state.todoListByTomorrow.filter(
				todo => todo._id !== id,
			);
			state.todoListByDay = state.todoListByDay.filter(
				todo => todo._id !== id,
			);
		},
	},
	extraReducers: {
		[filterTodoListByToday.fulfilled]: (state, action) => {
			state.todoListByToday = action.payload;
		},
		[filterTodoListByToday.rejected]: (state, action) => {
			state.error = action.payload;
		},
		[filterTodoListByTomorrow.fulfilled]: (state, action) => {
			state.todoListByTomorrow = action.payload;
		},
		[filterTodoListByTomorrow.rejected]: (state, action) => {
			state.error = action.payload;
		},
		[filterTodoListByWeek.fulfilled]: (state, action) => {
			state.todoListByDay = action.payload;
		},
		[filterTodoListByWeek.rejected]: (state, action) => {
			state.error = action.payload;
		},
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

export const { setSelectTodo, setTodoList, filterTodoList } = todoSlice.actions;

export const selectTodo = state => state.todo.todo;
export const selectTodoList = state => state.todo.todoList;
export const selectTodoListByToday = state => state.todo.todoListByToday;
export const selectTodoListByTomorrow = state => state.todo.todoListByTomorrow;
export const selectTodoListByDay = state => state.todo.todoListByDay;

export default todoSlice.reducer;
