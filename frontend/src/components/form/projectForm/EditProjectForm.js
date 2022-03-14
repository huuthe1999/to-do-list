import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import {
	selectProjectList,
	updateProject,
} from '../../../features/project/projectSlice';
import ProjectForm from './ProjectForm';
const EditProjectForm = ({ id, name, color, setShowModal, handleShowEdit }) => {
	const projectList = useSelector(selectProjectList);
	const [nameProject, setNameProject] = useState(name);
	const [colorProject, setColorProject] = useState(color);
	const dispatch = useDispatch();
	const handleSubmitForm = async e => {
		e.preventDefault();
		//Check nothing change
		if (nameProject === name && colorProject === color) {
			setShowModal(false);
			return;
		}
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

		const updatedProject = {
			name: nameProject.trim(),
			color: colorProject,
		};
		dispatch(updateProject({ id, updatedProject }));
		setShowModal(false);
		handleShowEdit();
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
			confirmButtonText='Change'
			setShowModal={setShowModal}
		/>
	);
};

export default EditProjectForm;
