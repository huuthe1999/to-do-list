import './projectItem.scss';
import { IoPencilOutline } from 'react-icons/io5';
const IconActions = edit =>
	edit ? (
		<>
			<span>
				<IoPencilOutline />
			</span>
			<span></span>
		</>
	) : (
		''
	);
const ProjectItem = ({ name, size, edit }) => {
	return (
		<li className='projectList__content--item'>
			<span className='projectList__content--item-icon'></span>
			<div className='projectList__content--item-content'>
				<p>{name}</p>
				<small>{size}</small>
			</div>
		</li>
	);
};

export default ProjectItem;
