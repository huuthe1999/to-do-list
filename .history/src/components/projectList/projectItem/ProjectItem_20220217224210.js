import { IoCloseOutline, IoPencilOutline } from 'react-icons/io5';
import './projectItem.scss';

const ProjectItem = ({ name, size, edit }) => {
	console.log(edit);
	return (
		<li className='projectList__content--item'>
			<span className='projectList__content--item-icon'></span>
			<div className='projectList__content--item-content'>
				<p>{name}</p>
				{edit ? (
					<div className='projectList__content--item-actions'>
						<span>
							<IoPencilOutline />
						</span>
						<span>
							<IoCloseOutline />
						</span>
					</div>
				) : (
					<small>{size}</small>
				)}
			</div>
		</li>
	);
};

export default ProjectItem;
