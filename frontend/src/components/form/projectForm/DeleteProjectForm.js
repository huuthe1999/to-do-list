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
	const handleSubmitForm = async e => {
		e.preventDefault();
		setTimeout(async () => await dispatch(deleteProject(id)), 500);
		await dispatch(setTodoList([]));
		await dispatch(filterTodoList(id));
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
