import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { defaultTodoList, todoListOptions } from '../../assets/data';
import { selectProject } from '../../features/project/projectSlice';
import {
	getTodoList,
	selectTodo,
	selectTodoList,
	selectTodoListByToday,
	selectTodoListByTomorrow,
} from '../../features/todo/todoSlice';
import { checkCalenderItem } from '../../helpers/checkCalenderItem';
import filterTodoList from '../../helpers/filterTodoList';
import EmptyData from '../common/emptyData/EmptyData';
import AddTodoSelectedForm from '../form/todoForm/AddTodoSelectedForm';
import NextWeek from '../nextWeek/NextWeek';
import ToDoItem from './todoItem/ToDoItem';
import './todoList.scss';
const customStyles = {
	container: provided => ({
		...provided,
		width: 'auto',
	}),
	menu: provided => ({
		...provided,
		width: 'auto',
	}),
	option: (provided, state) => ({
		...provided,
		color: state.isSelected ? 'red' : 'inherit',
		padding: 20,
		backgroundColor: state.isSelected
			? '#eeeeee'
			: state.isFocused
			? '#e0e0e0'
			: undefined,
	}),
};

const TodoList = () => {
	const todoList = useSelector(selectTodoList);
	const dispatch = useDispatch();
	const project = useSelector(selectProject);
	const todo = useSelector(selectTodo);
	const todoListByToday = useSelector(selectTodoListByToday);
	const todoListByTomorrow = useSelector(selectTodoListByTomorrow);
	const [allowAddTodoForm, setAllowAddTodoForm] = useState(false);
	const [todoFilter, setTodoFilter] = useState(todoList);
	const [option, setOption] = useState(todoListOptions[0]);
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

	useEffect(() => {
		const isCalendarItem = checkCalenderItem(project);
		if (!isCalendarItem) {
			setTodoFilter(filterTodoList(todoList, option));
		}
	}, [project, todoList, option]);

	const handleFilter = option => {
		setOption(option);
	};
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
		) : todoFilter.length > 0 && !checkCalenderItem(project) ? (
			todoFilter.map(todo => (
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
				<AnimatePresence>
					<motion.h2
						initial={{ x: 300, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -300, opacity: 0 }}>
						{nameProject}
					</motion.h2>
				</AnimatePresence>
				<div className='todoList__actions'>
					<AnimatePresence>
						{todoList.length > 0 && !allowAddTodoForm && (
							<motion.div
								initial={{ x: '100%', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								exit={{ x: '100%', opacity: 0 }}
								transition={{
									type: 'spring',
									stiffness: 300,
									damping: 15,
								}}>
								<Select
									onChange={handleFilter}
									isSearchable={false}
									defaultValue={option}
									options={todoListOptions}
									styles={customStyles}
								/>
							</motion.div>
						)}
					</AnimatePresence>
					{!allowAddTodoForm ? <AddTodoSelectedForm /> : null}
				</div>
			</div>
			<div
				className='todoList__container'
				style={{
					overflowY:
						todoFilter && todoFilter.length > 0
							? undefined
							: 'hidden',
				}}>
				<AnimatePresence>
					{project === defaultTodoList[2] ? (
						<NextWeek />
					) : (
						renderTodoList
					)}
				</AnimatePresence>
			</div>
		</div>
	);
};

export default TodoList;
