import './projectItem.scss';

const ProjectItem = ({ project, edit }) => {
	return (
		<li className='projectList__content--item'>
			<span className='projectList__content--item-icon'></span>
			<div className='projectList__content--item-content'>
				<p>{project.name}</p>
				<small>{project.size}</small>
			</div>
		</li>
	);
};

export default ProjectItem;
