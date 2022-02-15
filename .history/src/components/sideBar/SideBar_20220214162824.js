import './sideBar.scss';

const SideBar = ({ toggle }) => {
	return (
		<div className={`sidebar ${toggle ? 'active' : ''}`}>
			<div className='sidebar__inner'></div>
		</div>
	);
};

export default SideBar;
