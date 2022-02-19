import { useState } from 'react';
import ProjectForm from './ProjectForm';

const EditProjectForm = ({ name, setShowModal }) => {
	const [nameProject, setNameProject] = useState(name);

	const handleSubmitForm = e => {
		alert('oke');
	};

	const handleSetNameProject = e => {
		alert('oke');
	};
	return (
		<ProjectForm
			handleSubmit={handleSubmitForm}
			headingTitle='Edit project'
			name={nameProject}
			handleSetName={handleSetNameProject}
			confirmButtonText='Change name'
			setShowModal={setShowModal}
		/>
	);
};

export default EditProjectForm;
