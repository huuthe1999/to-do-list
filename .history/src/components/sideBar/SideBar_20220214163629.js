import './sideBar.scss';

const SideBar = () => {
	return (
		// <div className={`sidebar ${toggle ? 'active' : ''}`}>
		<div className='sidebar'>
			<div className='sidebar__inner'>
				<div className='sidebar__layout'>
					<div className='sidebar__layout-header'>Header sidebar</div>
					<div className='sidebar__layout-content'>
						Content sidebar
					</div>
					<div className='sidebar__layout-footer'>Footer sidebar</div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
