import { unwrapResult } from '@reduxjs/toolkit';
import { useState } from 'react';
import { RiAddLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { defaultTodoList } from '../../../assets/data';
import {
	addTodoToProjectList,
	selectDefaultProject,
	selectProject,
	selectProjectList,
	setSelectProject,
} from '../../../features/project/projectSlice';
import { createTodo } from '../../../features/todo/todoSlice';
import { randomColor } from '../../../helpers/randomColor';
import Modal from '../../modal/Modal';
import TodoForm from './TodoForm';

const AddTodoForm = () => {
	const projectList = useSelector(selectProjectList);
	const projectDefault = useSelector(selectDefaultProject);
	const project = useSelector(selectProject);
	const [modal, setShowModal] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(new Date());
	const [todoProject, setTodoProject] = useState(projectDefault);
	const dispatch = useDispatch();

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
		setTodoProject(projectDefault);
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
			projectId: todoProject._id,
		};
		if (!defaultTodoList.includes(project)) {
			dispatch(setSelectProject(todoProject));
		}
		let resultAction = await dispatch(
			createTodo({ id: todoProject._id, newTodo }),
		);

		handleClear();
		setShowModal(false);

		resultAction = unwrapResult(resultAction);

		dispatch(addTodoToProjectList(resultAction));
	};
	return (
		<>
			<button className='main__addBtn' onClick={() => setShowModal(true)}>
				<RiAddLine size={30} color='#fff' />
			</button>
			{/* <button className='topbar__button rightControl'>
				<RiAddLine
					title='Add new todo'
					className='topbar__button-icon'
					onClick={() => setShowModal(true)}
				/>
			</button> */}

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
					projectList={projectList}
					todoProject={todoProject}
					setTodoProject={handleChangeTodoProject}
					textButton='Add Task'
					setShowModal={handleShowModal}
				/>
			</Modal>
		</>
	);
};

export default AddTodoForm;
