import moment from 'moment';
import { todoListOptions } from '../assets/data';

const concatenateTime = (dateTodo, timeTodo) => {
	// const date = new Date(dateTodo);
	// const time = new Date(timeTodo);
	// return new Date(date.getFullYear, date.getMonth, date.getDate, time.getHours(), time.getMinutes());
	const x = dateTodo.toString().split('T')[0];
	const y = timeTodo.toString().split('T')[1];
	return x + 'T' + y;
};
const filterTodoList = (todoList, option) => {
	if (option === todoListOptions[0]) {
		//All
		return todoList;
	} else if (option === todoListOptions[1]) {
		//Expired (not checked & expired)
		return todoList.filter(todo => {
			const isExpired = moment().isAfter(
				concatenateTime(todo.date, todo.time),
			);
			return isExpired && !todo.checked ? todo : null;
		});
	} else if (option === todoListOptions[2]) {
		//Completed (checked)
		return todoList.filter(todo => {
			return todo.checked ? todo : null;
		});
	}
	return todoList.filter(todo => {
		//Incomplete (not checked & not expired)
		const isNotExpired = moment().isSameOrBefore(
			concatenateTime(todo.date, todo.time),
		);
		return isNotExpired && !todo.checked ? todo : null;
	});
};

export default filterTodoList;
