import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dayList } from '../../assets/data';
import {
	selectTodo,
	selectTodoList,
	selectTodoListByDay,
} from '../../features/todo/todoSlice';
import {
	arrangeTodoListByDate,
	sortTodoListByDay,
} from '../../helpers/filterDay';
import EmptyData from '../common/emptyData/EmptyData';
import './nextWeek.scss';
import NextWeekItem from './NextWeekItem';

const NextWeek = () => {
	const todoListByDay = useSelector(selectTodoListByDay);
	const todoList = useSelector(selectTodoList);
	const [weekTodoList, setWeekTodoList] = useState([]);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	console.log('1');
	// 	dispatch(filterTodoListByWeek());
	// }, [dispatch, todoList]);

	useEffect(() => {
		console.log('2');
		//Group todo list by day [{todoList:[], day: ''}]]}] day:[0..6] todoList sort field 'day' by day
		let sortTodoList = sortTodoListByDay(dayList, todoListByDay);
		//Sort todo list by currentDate ex today (day=4) and get next 6 days . The 7th day has today='3'
		// =>[{todoList:[], day: '4'}...{todoList:[], day: '3'}]
		sortTodoList = arrangeTodoListByDate(sortTodoList, new Date().getDay());
		setWeekTodoList(sortTodoList);
	}, [dispatch, todoList, todoListByDay]);

	return (
		<div className='nextWeek'>
			{weekTodoList.length > 0 ? (
				weekTodoList.map(todo => (
					<NextWeekItem key={todo.day} todo={todo} />
				))
			) : (
				<EmptyData />
			)}
		</div>
	);
};

export default NextWeek;
