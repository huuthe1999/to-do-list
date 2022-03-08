import { unwrapResult } from '@reduxjs/toolkit';
import { useEffect, useState } from 'react';
import { RiAddLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import {
	addTodoToProjectList,
	selectProject,
} from '../../../features/project/projectSlice';
import { createTodo } from '../../../features/todo/todoSlice';
import { randomColor } from '../../../helpers/randomColor';
import Modal from '../../modal/Modal';
import TodoForm from './TodoForm';

const AddTodoSelectedForm = () => {
	const projectSelected = useSelector(selectProject);
	const [modal, setShowModal] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(new Date());
	const [todoProject, setTodoProject] = useState(projectSelected);
	const dispatch = useDispatch();

	useEffect(() => {
		setTodoProject(projectSelected);
	}, [dispatch, projectSelected]);
	const handleShowModal = () => {
		setShowModal(false);
		handleClear();
	};
	const handleChangeDay = day => {
		setSelectedDate(day);
	};
	const handleChangeTime = time => {
		setSelectedTime(time);
	};
	const handleChangeTitle = e => {
		setTitle(e.target.value);
	};
	const handleChangeDescription = e => {
		setDescription(e.target.value);
	};

	const handleChangeTodoProject = project => {
		setTodoProject(project);
	};

	const handleClear = () => {
		setTitle('');
		setDescription('');
		setSelectedDate(new Date());
		setSelectedTime(new Date());
		setTodoProject(projectSelected);
	};
	const handleSubmit = async e => {
		e.preventDefault();
		const newTodo = {
			name: title,
			description,
			date: selectedDate,
			time: selectedTime,
			day: new Date(selectedDate).getDay(),
			color: randomColor(),
			projectId: projectSelected._id,
		};
		let resultAction = await dispatch(
			createTodo({ id: projectSelected._id, newTodo }),
		);
		resultAction = unwrapResult(resultAction);
		handleClear();
		setShowModal(false);
		dispatch(addTodoToProjectList(resultAction));
	};
	return (
		<>
			<button
				className='todoList__title--button'
				onClick={() => setShowModal(true)}>
				<RiAddLine title='Add new todo' />
			</button>
			<Modal showModal={modal} setShowModal={handleShowModal}>
				<TodoForm
					handleSubmit={handleSubmit}
					titleForm='Add New To Do'
					title={title}
					handleChangeTitle={handleChangeTitle}
					description={description}
					handleChangeDescription={handleChangeDescription}
					day={selectedDate}
					handleChangeDay={handleChangeDay}
					time={selectedTime}
					handleChangeTime={handleChangeTime}
					todoProject={todoProject}
					setTodoProject={handleChangeTodoProject}
					textButton='Add Task'
					setShowModal={handleShowModal}
					allowAddTodoSelectedForm
				/>
			</Modal>
		</>
	);
};

export default AddTodoSelectedForm;
