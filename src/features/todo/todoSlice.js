import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	selected: null,
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		setSelectTodo: (state, action) => {},
	},
});

export const { setSelectTodo } = todoSlice.actions;

export const selectTodo = state => state.todo.selected;

export default todoSlice.reducer;
