import { useDispatch } from 'react-redux';
import { deleteProject } from '../../../features/project/projectSlice';
import { filterTodoList, setTodoList } from '../../../features/todo/todoSlice';
import ProjectForm from './ProjectForm';
const DeleteProjectForm = ({
	id,
	name,
	isDeleteForm,
	setShowModal,
	handleShowEdit,
}) => {
	const dispatch = useDispatch();
	const handleSubmitForm = e => {
		e.preventDefault();
		setTimeout(() => dispatch(deleteProject(id)), 200);
		dispatch(setTodoList([]));
		dispatch(filterTodoList(id));
		setShowModal(false);
		handleShowEdit();
	};

	return (
		<ProjectForm
			handleSubmit={handleSubmitForm}
			name={name}
			// handleSetName={handleSetNameProject}
			// colorProject={colorProject}
			// handleSetColorProject={handleChangeColorProject}
			confirmButtonText='Delete'
			setShowModal={setShowModal}
			isDeleteForm={isDeleteForm}
		/>
	);
};

export default DeleteProjectForm;
