import { configureStore } from '@reduxjs/toolkit';
import projectSlice from '../features/project/projectSlice';
import todoSlice from '../features/todo/todoSlice';

export const store = configureStore({
	reducer: {
		todo: todoSlice,
		project: projectSlice,
	},
});
