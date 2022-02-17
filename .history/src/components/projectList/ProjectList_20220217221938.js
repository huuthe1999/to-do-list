import { useState } from 'react';
import { BsCaretUp } from 'react-icons/bs';
import { IoAdd, IoColorPaletteOutline, IoPencilOutline } from 'react-icons/io5';
import ProjectItem from './projectItem/ProjectItem';
import './projectList.scss';

const projectList = [
	{
		id: 1,
		name: 'work',
		size: 4,
	},
	{
		id: 2,
		name: 'personal',
		size: 7,
	},
	{
		id: 3,
		name: 'relax',
		size: 10,
	},
];
const ProjectList = () => {
	const [showEdit, setShowEdit] = useState(true);
	const [edit, setEdit] = useState(true);

	const editColorActive = edit ? '#d32f2f' : 'inherit';
	return (
		<div className='projectList'>
			<div className='projectList__header'>
				<div className='projectList__header--title'>
					<IoColorPaletteOutline size='24px' />
					<p>Projects</p>
				</div>
				<div className='projectList__header--expand'>
					{showEdit && projectList.length > 0 && (
						<span onClick={() => setEdit(!edit)}>
							<IoPencilOutline color={editColorActive} />
						</span>
					)}
					<span>
						<IoAdd />
					</span>
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
								<ProjectItem key={id} {...rest} edit={edit} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectList;
