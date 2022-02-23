import { useState } from 'react';
import { IoCloseOutline, IoPencilOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { setSelectProject } from '../../../features/project/projectSlice';
import EditProjectForm from '../../form/projectForm/EditProjectForm';
import Modal from '../../modal/Modal';
import './projectItem.scss';

const ProjectItem = ({ name, size, edit }) => {
	const dispatch = useDispatch();
	const [showModal, setShowModal] = useState(false);
	return (
		<>
			<li
				onClick={() => dispatch(setSelectProject(name))}
				className={`projectList__content--item ${
					edit ? '' : 'notEdit'
				}`}>
				<span className='projectList__content--item-icon'></span>
				<p>{name}</p>
				<div className='projectList__content--item-content'>
					{edit ? (
						<div className='projectList__content--item-actions'>
							<span>
								<IoPencilOutline
									onClick={() => setShowModal(true)}
								/>
							</span>
							<span>
								<IoCloseOutline />
							</span>
						</div>
					) : size === 0 ? (
						''
					) : size > 9 ? (
						<small>
							9<sup>+</sup>
						</small>
					) : (
						<small>{size}</small>
					)}
				</div>
				<Modal showModal={showModal} setShowModal={setShowModal}>
					<EditProjectForm name={name} setShowModal={setShowModal} />
				</Modal>
			</li>
		</>
	);
};

export default ProjectItem;
