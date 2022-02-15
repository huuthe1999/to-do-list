import './sideBar.scss';

const SideBar = () => {
	return (
		// <div className={`sidebar ${toggle ? 'active' : ''}`}>
		<div className='sidebar'>
			<div className='sidebar__inner'>
				<div className='sidebar__layout'>
					<div className='sidebar__layout-header'></div>
					<div className='sidebar__layout-'></div>
					<div className='sidebar__layout'></div>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
