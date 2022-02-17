import './projectList.scss';

const ProjectList = () => {
	return (
		<div className='projectList'>
			<div className='projectList__header'>
				<div className='projectList__header--title'>
					<IoprojectListNumberOutline size='24px' />
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
