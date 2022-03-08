import { useEffect, useState } from 'react';
import { BsCaretUp } from 'react-icons/bs';
import { IoColorPaletteOutline, IoPencil } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {
	getProjectList,
	selectProjectList,
} from '../../features/project/projectSlice';
import { selectTodo } from '../../features/todo/todoSlice';
import AddProjectForm from '../form/projectForm/AddProjectForm';
import ProjectItem from './projectItem/ProjectItem';
import './projectList.scss';

const ProjectList = () => {
	const projectList = useSelector(selectProjectList);
	const todo = useSelector(selectTodo);
	const [showMenu, setShowMenu] = useState(true);
	const [showEdit, setShowEdit] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		// const response = async () => {
		// 	await dispatch(getProjectList());
		// };
		// response();
		dispatch(getProjectList());
	}, [dispatch, todo]);

	const handleShowEdit = () => {
		setShowEdit(!showEdit);
	};
	const editActiveStyle = showEdit
		? { color: '#058527', backgroundColor: '#e0e0e0' }
		: undefined;
	return (
		<div className='projectList'>
			<div className='projectList__header'>
				<div className='projectList__header--title'>
					<IoColorPaletteOutline size='24px' />
					<p>Projects</p>
				</div>
				<div className='projectList__header--expand'>
					{showMenu && projectList.length > 0 && (
						<span
							style={editActiveStyle}
							onClick={() => setShowEdit(!showEdit)}>
							<IoPencil title='Edit project' />
						</span>
					)}
					<AddProjectForm />
					<span>
						<BsCaretUp />
					</span>
				</div>
			</div>
			<div className='projectList__content'>
				<div className='projectList__content--wrapper'>
					<div className='projectList__content--wrapper--inner'>
						<ul className='projectList__content--list'>
							{projectList.length > 0 &&
								projectList.map(project => (
									<ProjectItem
										key={project._id}
										project={project}
										edit={showEdit}
										handleShowEdit={handleShowEdit}
									/>
								))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectList;
