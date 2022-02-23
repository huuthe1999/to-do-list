import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import projectSlice from '../features/project/projectSlice';
import todoSlice from '../features/todo/todoSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		todo: todoSlice,
		project: projectSlice,
	},
});
