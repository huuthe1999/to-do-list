import image from '../../assets/images/Octocat.png';
import Calendar from '../calendar/Calendar';
import AddTodoForm from '../form/todoForm/AddTodoForm';
import ProjectList from '../projectList/ProjectList';
import './sideBar.scss';

const SideBar = () => {
	return (
		<div className='sidebar'>
			<div className='sidebar__layout'>
				<div className='sidebar__layout-header'>
					{/* <motion.button
						initial='hidden'
						animate='show'
						variants={animation}>
						Add todo
					</motion.button> */}
					<AddTodoForm />
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
					<a
						href='https://github.com/huuthe1999/to-do-list'
						rel='noreferrer'
						target='_blank'>
						<img src={image} alt='Github repository' />
					</a>
				</div>
			</div>
		</div>
	);
};

export default SideBar;
