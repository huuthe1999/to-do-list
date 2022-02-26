import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	todoList: [],
	selected: null,
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		setSelectTodo: (state, action) => {},
		setTodoList: (state, action) => {},
	},
});

export const { setSelectTodo, setTodoList } = todoSlice.actions;

export const selectTodo = state => state.todo.selected;
export const selectTodoList = state => state.todo.todoList;

export default todoSlice.reducer;
