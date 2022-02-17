import { BsCaretUp } from 'react-icons/bs';
import { IoColorPaletteOutline } from 'react-icons/io5';
import './projectList.scss';
const ProjectList = () => {
	return (
		<div className='projectList'>
			<div className='projectList__header'>
				<div className='projectList__header--title'>
					<IoColorPaletteOutline size='24px' />
					<p>projectList</p>
				</div>
				<div className='projectList__header--expand'>
					<span>
						<BsCaretUp />
					</span>
				</div>
			</div>
		</div>
	);
};

export default ProjectList;
