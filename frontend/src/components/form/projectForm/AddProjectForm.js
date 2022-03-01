import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { colourOptions } from '../../../assets/data';
import { createProject } from '../../../features/project/projectSlice';
import Modal from '../../modal/Modal';
import ProjectForm from './ProjectForm';
const AddProjectForm = () => {
	const [showAddProject, setShowAddProject] = useState(false);
	const [nameProject, setNameProject] = useState('');
	const [colorProject, setColorProject] = useState(colourOptions[6]);
	const dispatch = useDispatch();
	const handleChangeName = e => {
		setNameProject(e.target.value);
	};

	const handleChangeColorProject = e => {
		setColorProject(e);
	};

	const handleSubmitForm = async e => {
		e.preventDefault();
		const newProject = {
			name: nameProject,
			color: colorProject,
		};
		await dispatch(createProject(newProject));
		setNameProject('');
		setColorProject(colourOptions[6]);
		setShowAddProject(false);
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
					handleSetName={handleChangeName}
					colorProject={colorProject}
					handleSetColorProject={handleChangeColorProject}
					confirmButtonText='Add Project'
					setShowModal={setShowAddProject}
				/>
			</Modal>
		</>
	);
};

export default AddProjectForm;
