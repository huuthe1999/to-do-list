import image from '../../assets/images/Octocat/Octocat.jpg';
import Calendar from '../calendar/Calendar';
import ProjectList from '../projectList/ProjectList';
import './sideBar.scss';
const SideBar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar__layout'>
				<div className='sidebar__layout-header'>
					<p>Header sidebar</p>
				</div>
				<div className='sidebar__layout-content'>
					<Calendar />
					{/* <hr
						style={{
							height: '2px',
							backgroundColor: 'rgba(8, 41, 228, 0.2)',
						}}
					/> */}
					<ProjectList />
				</div>
				<div className='sidebar__layout-footer'>
					<a href='https://github.com/huuthe1999/to-do-list'>
						<img src={image} alt='Github repository' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
