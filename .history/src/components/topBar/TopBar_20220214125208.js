import {
	RiHomeLine,
	RiMenuLine,
	RiSearchLine,
	RiAddLine,
	RiQuestionLine,
	RiNotification2Line,
} from 'react-icons/ri';
import Avatar from '../../assets/images/avatar.png';
import './topbar.scss';
const TopBar = ({ handleSetToggle }) => {
	return (
		<header className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button
						className='topbar__button leftControl'
						onClick={handleSetToggle()}>
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
					<button className='topbar__button rightControl'>
						<RiAddLine className='topbar__button-icon' />
					</button>
					<button className='topbar__button rightControl'>
						<RiQuestionLine className='topbar__button-icon' />
					</button>
					<button className='topbar__button rightControl'>
						<RiNotification2Line className='topbar__button-icon' />
					</button>
					<button className='topbar__button info'>
						<img src={Avatar} alt='avatar' />
						<p>Jackson Statham</p>
					</button>
				</div>
			</div>
		</header>
	);
};

export default TopBar;
