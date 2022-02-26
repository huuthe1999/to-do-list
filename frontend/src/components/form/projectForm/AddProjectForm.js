import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import Modal from '../../modal/Modal';
import ProjectForm from './ProjectForm';

const AddProjectForm = () => {
	const [showAddProject, setShowAddProject] = useState(false);
	const [nameProject, setNameProject] = useState('');

	const handleAddProject = e => {
		alert('oke');
	};

	const handleSubmitForm = e => {
		alert('oke');
	};
	return (
		<>
			<span>
				<IoAdd onClick={() => setShowAddProject(true)} />
			</span>
			<Modal showModal={showAddProject} setShowModal={setShowAddProject}>
				<ProjectForm
					handleSubmit={handleSubmitForm}
					headingTitle='add project'
					name={nameProject}
					handleSetName={handleAddProject}
					confirmButtonText='Add Project'
					setShowModal={setShowAddProject}
				/>
			</Modal>
		</>
	);
};

export default AddProjectForm;
