import './sideBar.scss';
import App from 'srcApp';

const SideBar = ({ toggle }) => {
	return (
		// <div className={`sidebar ${toggle ? 'active' : ''}`}>
		<div className='sidebar'>
			<div className='sidebar__inner'>Sidebar</div>
		</div>
	);
};

export default SideBar;
