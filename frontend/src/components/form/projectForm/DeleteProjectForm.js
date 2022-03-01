import { useDispatch } from 'react-redux';
import { deleteProject } from '../../../features/project/projectSlice';
import ProjectForm from './ProjectForm';
const DeleteProjectForm = ({ id, name, isDeleteForm, setShowModal }) => {
	const dispatch = useDispatch();
	const handleSubmitForm = e => {
		e.preventDefault();
		dispatch(deleteProject(id));
		setShowModal(false);
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
