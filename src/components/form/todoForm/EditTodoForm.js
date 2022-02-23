import { useState } from 'react';
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
const EditTodoForm = ({ todo }) => {
	const [modal, setShowModal] = useState(false);
	const [title, setTitle] = useState(todo.title);
	const [description, setDescription] = useState(todo.description);
	const [selectedDate, setSelectedDate] = useState(todo.day);
	const [selectedTime, setSelectedTime] = useState(todo.time);
	const [todoProject, setTodoProject] = useState(todo.project);
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
		<Modal showModal={modal} setShowModal={handleShowModal}>
			<TodoForm
				handleSubmit={handleSubmit}
				titleForm='Edit To Do'
				title={title}
				handleChangeName={handleChangeTitle}
				description={description}
				handleChangeDescription={handleChangeDescription}
				day={selectedDate}
				handleChangeDay={handleChangeDay}
				time={selectedTime}
				handleChangeTime={handleChangeTime}
				projectList={projectList}
				todoProject={todoProject}
				setTodoProject={handleChangeTodoProject}
				textButton='Change'
				setShowModal={handleShowModal}
			/>
		</Modal>
	);
};

export default EditTodoForm;
