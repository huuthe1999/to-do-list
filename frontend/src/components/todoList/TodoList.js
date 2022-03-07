import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defaultTodoList } from '../../assets/data';
import { selectProject } from '../../features/project/projectSlice';
import {
	getTodoList,
	selectTodo,
	selectTodoList,
	selectTodoListByToday,
	selectTodoListByTomorrow,
} from '../../features/todo/todoSlice';
import { checkCalenderItem } from '../../helpers/checkCalenderItem';
import EmptyData from '../common/emptyData/EmptyData';
import AddTodoSelectedForm from '../form/todoForm/AddTodoSelectedForm';
import NextWeek from '../nextWeek/NextWeek';
import ToDoItem from './todoItem/ToDoItem';
import './todoList.scss';

const TodoList = () => {
	const todoList = useSelector(selectTodoList);
	const dispatch = useDispatch();
	const project = useSelector(selectProject);
	const todo = useSelector(selectTodo);
	const todoListByToday = useSelector(selectTodoListByToday);
	const todoListByTomorrow = useSelector(selectTodoListByTomorrow);
	const [allowAddTodoForm, setAllowAddTodoForm] = useState(false);
	const nameProject = typeof project === 'object' ? project.name : project;
	useEffect(() => {
		setAllowAddTodoForm(defaultTodoList.includes(project));
	}, [project]);

	useEffect(() => {
		const isCalendarItem = checkCalenderItem(project);
		//Check today or tomorrow
		if (!isCalendarItem) {
			dispatch(getTodoList(project._id));
		}
	}, [dispatch, project, todo]);

	// useEffect(() => {
	// 	const isCalendarItem = checkCalenderItem(project);
	// 	//Check project is today
	// 	if (isCalendarItem && project === defaultTodoList[0]) {
	// 		dispatch(filterTodoListByToday());
	// 	}
	// }, [dispatch, project, todoListByToday]);

	// useEffect(() => {
	// 	const isCalendarItem = checkCalenderItem(project);
	// 	//Check project is tomorrow
	// 	if (isCalendarItem && project === defaultTodoList[1]) {
	// 		dispatch(filterTodoListByTomorrow());
	// 	}
	// }, [dispatch, project, todoListByTomorrow]);

	const renderTodoList =
		project === defaultTodoList[0] && todoListByToday.length > 0 ? (
			todoListByToday.map(todo => (
				<ToDoItem
					key={todo._id}
					todo={todo}
					nameProject={nameProject}
				/>
			))
		) : project === defaultTodoList[1] && todoListByTomorrow.length > 0 ? (
			todoListByTomorrow.map(todo => (
				<ToDoItem
					key={todo._id}
					todo={todo}
					nameProject={nameProject}
				/>
			))
		) : todoList.length > 0 && !checkCalenderItem(project) ? (
			todoList.map(todo => (
				<ToDoItem
					key={todo._id}
					todo={todo}
					nameProject={nameProject}
				/>
			))
		) : (
			<EmptyData />
		);

	return (
		<div className='todoList'>
			<div className='todoList__title'>
				<h2>{nameProject}</h2>
				{!allowAddTodoForm ? <AddTodoSelectedForm /> : null}
			</div>
			<div
				className='todoList__container'
				style={{
					overflowY:
						todoList && todoList.length > 0 ? undefined : 'hidden',
				}}>
				{project === defaultTodoList[2] ? <NextWeek /> : renderTodoList}
			</div>
		</div>
	);
};

export default TodoList;
