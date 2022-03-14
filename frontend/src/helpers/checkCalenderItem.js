import { defaultTodoList } from '../assets/data';

export const checkCalenderItem = item => {
	if (typeof item === 'object') {
		return false;
	}
	return defaultTodoList.includes(item);
};
