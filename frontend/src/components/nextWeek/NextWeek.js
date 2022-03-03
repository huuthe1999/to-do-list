import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dayList } from '../../assets/data';
import {
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
		let sortTodoList = sortTodoListByDay(dayList, todoListByDay);
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
