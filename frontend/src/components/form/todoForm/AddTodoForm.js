import { unwrapResult } from '@reduxjs/toolkit';
import { motion } from 'framer-motion';
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

const animation = {
	hidden: { x: '100%', opacity: 0 },
	show: {
		x: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 15,
			duration: 0.2,
		},
	},
};

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
		let resultAction = await dispatch(
			createTodo({ id: todoProject._id, newTodo }),
		);
		resultAction = unwrapResult(resultAction);
		handleClear();
		setShowModal(false);
		dispatch(addTodoToProjectList(resultAction));
		if (!defaultTodoList.includes(project)) {
			dispatch(setSelectProject(todoProject));
		}
	};
	return (
		<>
			<motion.button
				onClick={() => setShowModal(true)}
				initial='hidden'
				animate='show'
				variants={animation}
				whileTap={{
					scale: 0.9,
				}}
				whileHover={{
					scale: 1.05,
					filter: 'brightness(1.2)',
					boxShadow: '0px 0px 10px rgb(0,0,0,0.5)',
				}}>
				<RiAddLine
					size='24px'
					color='#fff'
					style={{ marginRight: '5px' }}
				/>
				Add todo
			</motion.button>
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
