import { useEffect, useState } from 'react';
import { IoCloseOutline, IoPencilOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {
	selectProject,
	setSelectProject,
} from '../../../features/project/projectSlice';
import DeleteProjectForm from '../../form/projectForm/DeleteProjectForm';
import EditProjectForm from '../../form/projectForm/EditProjectForm';
import Modal from '../../modal/Modal';
import './projectItem.scss';

const ProjectItem = ({ project, edit, handleShowEdit }) => {
	const projectSelected = useSelector(selectProject);
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);
	const [isDeleteForm, setIsDeleteForm] = useState(true); //0: edit, 1: delete
	const handleShowModal = value => {
		setIsDeleteForm(value);
		setShowModal(true);
	};

	useEffect(() => {
		return () => {
			setShowModal(false);
		};
	}, [project]);
	return (
		<>
			<li
				style={{
					backgroundColor:
						project.name === projectSelected.name
							? '#b3b3b3'
							: undefined,
				}}
				className={`projectList__content--item ${
					edit ? '' : 'notEdit'
				}`}>
				<span
					className='projectList__content--item-icon'
					style={{ backgroundColor: project.color.color }}></span>
				<p onClick={() => dispatch(setSelectProject(project))}>
					{project.name}
				</p>
				<div className='projectList__content--item-content'>
					{edit ? (
						<div className='projectList__content--item-actions'>
							<span onClick={() => handleShowModal(false)}>
								<IoPencilOutline />
							</span>
							<span onClick={() => handleShowModal(true)}>
								<IoCloseOutline />
							</span>
						</div>
					) : project.todoListId.length === 0 ? (
						''
					) : project.todoListId.length > 9 ? (
						<small>
							9<sup>+</sup>
						</small>
					) : (
						<small>{project.todoListId.length}</small>
					)}
				</div>
				<Modal showModal={showModal} setShowModal={setShowModal}>
					{!isDeleteForm ? (
						<EditProjectForm
							id={project._id}
							name={project.name}
							color={project.color}
							setShowModal={setShowModal}
							handleShowEdit={handleShowEdit}
						/>
					) : (
						<DeleteProjectForm
							id={project._id}
							name={project.name}
							setShowModal={setShowModal}
							isDeleteForm={isDeleteForm}
							handleShowEdit={handleShowEdit}
						/>
					)}
				</Modal>
			</li>
		</>
	);
};

export default ProjectItem;
