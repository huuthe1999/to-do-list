import { useState } from 'react';
import { RiAddLine } from 'react-icons/ri';
import Modal from '../../modal/Modal';
import TodoForm from './TodoForm';
const projectList = [
	{
		id: 1,
		title: 'workkkvvv  kkkkkkkkkkkkkkkkkkkk  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
		time: '10:00 AM',
		date: '06/03/2021',
		day: '6',
		checked: false,
		color: '#00ff00',
		name: 'workkkvvv  kkkkkkkkkkkkkkkkkkkk  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
		size: 4,
	},
	{
		id: 2,
		title: 'personal edfefeef fewfewfefwfewg fewfewfewfew fwfewfe',

		time: '10:00 AM',
		date: '06/03/2021',
		day: '4',
		checked: false,
		color: '#00ff00',
		name: 'perspersonal edfefeef fewfewfefwfewg fewfewfewfew fwfewfeonal',
		size: 7,
	},
	{
		id: 3,
		title: 'relax personal',
		time: '10:00 AM',
		date: '06/03/2021',
		day: '2',
		checked: false,
		color: '#00ff00',
		name: 'relax personal',
		size: 10,
	},
	{
		id: 4,
		title: 'relax play videos',
		time: '10:00 AM',
		date: '06/03/2021',
		day: '6',
		checked: true,
		color: '#00ff00',
		name: 'relax play videos',
		size: 10,
	},
	{
		id: 5,
		title: 'relax swimming',
		time: '10:00 AM',
		date: '06/03/2021',
		day: '6',
		checked: false,
		color: '#00ff00',
		name: 'relax swimming',
		size: 10,
	},
	{
		id: 6,
		title: 'relax watching tv',
		time: '10:00 AM',
		date: '06/03/2021',
		day: '6',
		checked: true,
		color: '#00ff00',
		name: 'relax watching tv',
		size: 10,
	},
];
const AddTodoForm = () => {
	const [modal, setShowModal] = useState(false);
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(new Date());

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
					textButton='Add Task'
					setShowModal={handleShowModal}
				/>
			</Modal>
		</>
	);
};

export default AddTodoForm;
