import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProject } from '../../../features/project/projectSlice';
import ProjectForm from './ProjectForm';
const EditProjectForm = ({ id, name, color, setShowModal }) => {
	const [nameProject, setNameProject] = useState(name);
	const [colorProject, setColorProject] = useState(color);
	const dispatch = useDispatch();
	const handleSubmitForm = e => {
		e.preventDefault();
		if (nameProject === name && colorProject === color) {
			setShowModal(false);
			return;
		}
		const updatedProject = {
			name: nameProject,
			color: colorProject,
		};
		dispatch(updateProject({ id, updatedProject }));
		setShowModal(false);
	};

	const handleChangeColorProject = e => {
		setColorProject(e);
	};

	const handleSetNameProject = e => {
		setNameProject(e.target.value);
	};
	return (
		<ProjectForm
			handleSubmit={handleSubmitForm}
			headingTitle='Edit project'
			name={nameProject}
			handleSetName={handleSetNameProject}
			colorProject={colorProject}
			handleSetColorProject={handleChangeColorProject}
			confirmButtonText='Change name'
			setShowModal={setShowModal}
		/>
	);
};

export default EditProjectForm;
