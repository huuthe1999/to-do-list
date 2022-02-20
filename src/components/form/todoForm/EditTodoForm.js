import { useState } from 'react';
import Modal from '../../modal/Modal';
import TodoForm from './TodoForm';

const EditTodoForm = ({ project }) => {
	const [modal, setShowModal] = useState(false);
	const [title, setTitle] = useState(project.title);
	const [description, setDescription] = useState(project.description);
	const [selectedDate, setSelectedDate] = useState(project.day);
	const [selectedTime, setSelectedTime] = useState(project.time);

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
				// projectList={projectList}
				textButton='Change'
				setShowModal={handleShowModal}
			/>
		</Modal>
	);
};

export default EditTodoForm;
