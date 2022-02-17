import { useState } from 'react';
import { BsCaretUp } from 'react-icons/bs';
import { IoAdd, IoColorPaletteOutline, IoPencil } from 'react-icons/io5';
import './projectList.scss';
const ProjectList = () => {
	const [showEdit, setShowEdit] = useState(true);
	return (
		<div className='projectList'>
			<div className='projectList__header'>
				<div className='projectList__header--title'>
					<IoColorPaletteOutline size='24px' />
					<p>Projects</p>
				</div>
				<div className='projectList__header--expand'>
					<span>
						<IoPencil />
					</span>
					{showEdit && (
						<span>
							<IoAdd />
						</span>
					)}

					<span>
						<BsCaretUp />
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectList;
