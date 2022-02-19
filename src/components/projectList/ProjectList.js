import { useState } from 'react';
import { BsCaretUp } from 'react-icons/bs';
import { IoColorPaletteOutline, IoPencil } from 'react-icons/io5';
import AddProjectForm from '../form/projectForm/AddProjectForm';
import ProjectItem from './projectItem/ProjectItem';
import './projectList.scss';

const projectList = [
	{
		id: 1,
		name: 'workkkvvv  kkkkkkkkkkkkkkkkkkkk  kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk',
		size: 4,
	},
	{
		id: 2,
		name: 'personal edfefeef fewfewfefwfewg fewfewfewfew fwfewfe',
		size: 7,
	},
	{
		id: 3,
		name: 'relax',
		size: 10,
	},
];
const ProjectList = () => {
	const [showMenu, setShowMenu] = useState(true);
	const [showEdit, setShowEdit] = useState(false);

	// const [edit, setEdit] = useState(true);

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
							{projectList.map(({ id, ...rest }) => (
								<ProjectItem
									key={id}
									{...rest}
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
