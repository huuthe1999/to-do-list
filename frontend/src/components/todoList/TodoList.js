import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defaultTodoList } from '../../assets/data';
import { selectProject } from '../../features/project/projectSlice';
import { getTodoList, selectTodoList } from '../../features/todo/todoSlice';
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
	const [allowAddTodoForm, setAllowAddTodoForm] = useState(false);
	const nameProject = typeof project === 'object' ? project.name : project;
	useEffect(() => {
		setAllowAddTodoForm(defaultTodoList.includes(project));
	}, [project]);

	useEffect(() => {
		const isCalendarItem = checkCalenderItem(project);
		if (!isCalendarItem) {
			dispatch(getTodoList(project._id));
		}
	}, [dispatch, project]);
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
				{project === defaultTodoList[2] ? (
					<NextWeek />
				) : todoList && todoList.length > 0 ? (
					todoList.map(todo => (
						<ToDoItem
							key={todo._id}
							todo={todo}
							nameProject={nameProject}
						/>
					))
				) : (
					<EmptyData />
				)}
			</div>
		</div>
	);
};

export default TodoList;
