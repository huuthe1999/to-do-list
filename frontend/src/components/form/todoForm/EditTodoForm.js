import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectProjectList } from '../../../features/project/projectSlice';
import { updateTodo } from '../../../features/todo/todoSlice';
import TodoForm from './TodoForm';

const EditTodoForm = ({ todo, setShowModal, }) => {
	const projectList = useSelector(selectProjectList);

	const [name, setName] = useState(todo.name);
	const [description, setDescription] = useState(todo.description);
	const [selectedDate, setSelectedDate] = useState(todo.date);
	const [selectedTime, setSelectedTime] = useState(todo.time);
	const [todoProject, setTodoProject] = useState({
		name: todo.nameProject,
		projectId: todo.projectId,
	});
	const dispatch = useDispatch();

	const handleChangeDay = day => {
		setSelectedDate(day);
	};
	const handleChangeTime = time => {
		setSelectedTime(time);
	};
	const handleChangeName = e => {
		setName(e.target.value);
	};
	const handleChangeDescription = e => {
		setDescription(e.target.value);
	};
	const handleChangeTodoProject = name => {
		setTodoProject(name);
	};
	const handleSubmit = e => {
		e.preventDefault();
		const newTodo = {
			name,
			description,
			date: selectedDate,
			time: selectedTime,
			day: new Date(selectedDate).getDay(),
			projectId:
				todo.projectId === todoProject.projectId
					? todo.projectId
					: todoProject._id,
		};
		dispatch(updateTodo({ id: todo._id, newTodo }));
		setShowModal(false);
	};
	return (
		<TodoForm
			handleSubmit={handleSubmit}
			titleForm='Edit To Do'
			title={name}
			handleChangeTitle={handleChangeName}
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
			setShowModal={setShowModal}
		/>
	);
};

export default EditTodoForm;
