import { useState } from 'react';
import { RiAddLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { selectProject } from '../../../features/project/projectSlice';
import Modal from '../../modal/Modal';
import TodoForm from './TodoForm';
const projectList = [
	{
		id: 1,
		name: 'workkkvvv  kkkkkkkkkkkkkkkkkkkk  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
		size: 4,
	},
	{
		id: 2,
		name: 'personal edfefeef fewfewfefwfewg fewfewfewfew fwfewfe',
		size: 7,
	},
	{
		id: 3,
		name: 'relax',
		size: 10,
	},
	{
		id: 4,
		name: 'relax personal',
		size: 10,
	},
	{
		id: 5,
		name: 'relax play videos',
		size: 9,
	},
	{
		id: 6,
		name: 'relax swimming',
		size: 10,
	},
	{
		id: 7,
		name: 'relax watching tv',
		size: 10,
	},
];
const AddTodoForm = () => {
	const projectSelected = useSelector(selectProject);
	const [modal, setShowModal] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(new Date());
	const [todoProject, setTodoProject] = useState(projectSelected);
	const handleShowModal = () => {
		setShowModal(false);
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

	const handleChangeTodoProject = name => {
		setTodoProject(name);
	};

	const handleSubmit = e => {};
	return (
		<>
			<button className='topbar__button rightControl'>
				<RiAddLine
					className='topbar__button-icon'
					onClick={() => setShowModal(true)}
				/>
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
