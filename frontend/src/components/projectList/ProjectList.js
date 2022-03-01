import { useEffect, useState } from 'react';
import { BsCaretUp } from 'react-icons/bs';
import { IoColorPaletteOutline, IoPencil } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {
	getProjectList,
	isUpdateProjectList,
	selectProjectList,
	setIsUpdateProjectList,
} from '../../features/project/projectSlice';
import AddProjectForm from '../form/projectForm/AddProjectForm';
import ProjectItem from './projectItem/ProjectItem';
import './projectList.scss';

// const projectList = [
// 	{
// 		id: 1,
// 		name: 'workkkvvv  kkkkkkkkkkkkkkkkkkkk  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
// 		size: 4,
// 	},
// 	{
// 		id: 2,
// 		name: 'personal',
// 		size: 7,
// 	},
// 	{
// 		id: 3,
// 		name: 'relax',
// 		size: 10,
// 	},
// 	{
// 		id: 4,
// 		name: 'relax personal',
// 		size: 10,
// 	},
// 	{
// 		id: 5,
// 		name: 'relax play videos',
// 		size: 9,
// 	},
// 	{
// 		id: 6,
// 		name: 'relax swimming',
// 		size: 10,
// 	},
// 	{
// 		id: 7,
// 		name: 'relax watching tv',
// 		size: 10,
// 	},
// ];

const ProjectList = () => {
	const projectList = useSelector(selectProjectList);
	const [showMenu, setShowMenu] = useState(true);
	const [showEdit, setShowEdit] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getProjectList());
	}, [dispatch]);

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
							<IoPencil />
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
							{projectList &&
								projectList.map(project => (
									<ProjectItem
										key={project._id}
										project={project}
										edit={showEdit}
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
