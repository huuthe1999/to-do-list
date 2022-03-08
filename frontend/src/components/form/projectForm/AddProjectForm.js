import { useState } from 'react';
import { IoAdd } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { colourOptions } from '../../../assets/data';
import {
	createProject,
	selectProjectList,
} from '../../../features/project/projectSlice';
import Modal from '../../modal/Modal';
import ProjectForm from './ProjectForm';
const AddProjectForm = () => {
	const projectList = useSelector(selectProjectList);
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
		if (projectList.find(project => project.name === nameProject)) {
			const Toast = Swal.mixin({
				toast: true,
				position: 'bottom-right',
				iconColor: 'white',
				customClass: {
					popup: 'colored-toast',
				},
				showConfirmButton: false,
				timer: 2000,
			});
			await Toast.fire({
				icon: 'error',
				title: 'Project name already exists',
			});
			return;
		}
		const newProject = {
			name: nameProject.trim(),
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
				<IoAdd
					title='Add new project'
					onClick={() => setShowAddProject(true)}
				/>
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
