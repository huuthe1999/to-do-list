import './sideBar.scss';

const SideBar = ({ toggle }) => {
	return <div className={`sidebar ${toggle ? 'active' : ''}`}>SideBar</div>;
};

export default SideBar;
