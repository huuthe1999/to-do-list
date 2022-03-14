import { AnimatePresence, motion } from 'framer-motion';
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

const item = {
	hidden: {
		opacity: 0,
		x: '100%',
	},
	show: index => ({
		opacity: 1,
		x: 0,
		transition: {
			delay: index * 0.1,
		},
	}),
};

const ProjectItem = ({ project, edit, handleShowEdit, index, toggleOpen }) => {
	const projectSelected = useSelector(selectProject);
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);
	const [isDeleteForm, setIsDeleteForm] = useState(true); //0: edit, 1: delete
	const handleShowModal = value => {
		setIsDeleteForm(value);
		setShowModal(true);
	};

	const handleClick = () => {
		dispatch(setSelectProject(project));
		toggleOpen();
	};

	useEffect(() => {
		return () => {
			setShowModal(false);
		};
	}, [project]);
	return (
		<>
			<motion.li
				variants={item}
				exit={{
					opacity: 0,
					x: '-100%',
				}}
				custom={index}
				whileHover={{
					scale: 1.05,
					originX: 0,
					boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
				}}
				style={{
					backgroundColor:
						project.name === projectSelected.name
							? '#6accbc'
							: undefined,
				}}
				className={`projectList__content--item ${
					edit ? '' : 'notEdit'
				}`}>
				<span
					className='projectList__content--item-icon'
					style={{ backgroundColor: project.color.color }}></span>
				<p onClick={handleClick}>{project.name}</p>
				<div className='projectList__content--item-content'>
					<AnimatePresence>
						{edit ? (
							<motion.div
								variants={item}
								custom={index}
								exit={{
									opacity: 0,
									x: '100%',
									transition: {
										duration: index * 0.05,
									},
								}}
								className='projectList__content--item-actions'>
								<span onClick={() => handleShowModal(false)}>
									<IoPencilOutline />
								</span>
								<span onClick={() => handleShowModal(true)}>
									<IoCloseOutline />
								</span>
							</motion.div>
						) : project.todoListId.length === 0 ? (
							''
						) : project.todoListId.length > 9 ? (
							<motion.small
								variants={item}
								custom={index}
								exit={{
									opacity: 0,
									x: '100%',
									transition: {
										duration: index * 0.05,
									},
								}}>
								9<sup>+</sup>
							</motion.small>
						) : (
							<motion.small
								variants={item}
								custom={index}
								exit={{
									opacity: 0,
									x: '100%',
									transition: {
										duration: index * 0.05,
									},
								}}>
								{project.todoListId.length}
							</motion.small>
						)}
					</AnimatePresence>
				</div>
			</motion.li>
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
		</>
	);
};

export default ProjectItem;
