import {
	RiHomeLine,
	RiMenuLine,
	RiNotification2Line,
	RiQuestionLine,
	RiSearchLine,
} from 'react-icons/ri';
import Avatar from '../../assets/images/avatar.png';
import AddTodoForm from '../form/todoForm/AddTodoForm';
import './topbar.scss';
const TopBar = () => {
	return (
		<header className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button className='topbar__button leftControl'>
						<RiMenuLine className='topbar__button-icon' />
					</button>
					<button className='topbar__button leftControl'>
						<RiHomeLine className='topbar__button-icon' />
					</button>
					<div className='topbar__inner-leftControl-search'>
						<RiSearchLine className='topbar__button-icon topbar__button-icon-search' />
						<input type='text' placeholder='Search' />
					</div>
				</div>
				<div className='topbar__inner-rightControl'>
					<AddTodoForm />
					<button className='topbar__button rightControl'>
						<RiQuestionLine className='topbar__button-icon' />
					</button>
					<button className='topbar__button rightControl'>
						<RiNotification2Line className='topbar__button-icon' />
					</button>
					<button className='topbar__button info'>
						<img src={Avatar} alt='avatar' />
						<p>Jackson Stalag</p>
					</button>
				</div>
			</div>
		</header>
	);
};

export default TopBar;
