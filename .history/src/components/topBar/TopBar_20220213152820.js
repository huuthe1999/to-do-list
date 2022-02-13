import {
	RiHomeLine,
	RiMenuLine,
	RiSearchLine,
	RiAddLine,
	RiQuestionLine,
	RiAlarmLine,
} from 'react-icons/ri';
import Avatar from '../../assets/images/avatar.png';
import './topbar.scss';
const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button className='topbar__button'>
						<RiMenuLine className='topbar__button-icon' />
					</button>
					<button className='topbar__button'>
						<RiHomeLine className='topbar__button-icon' />
					</button>
					<div className='topbar__inner-leftControl-search'>
						<RiSearchLine className='topbar__button-icon topbar__button-icon-search' />
						<input type='text' placeholder='Search' />
					</div>
				</div>
				<div className='topbar__inner-rightControl'>
					<button className='topbar__button'>
						<RiAddLine className='topbar__button-icon' />
					</button>
					<button className='topbar__button'>
						<RiQuestionLine className='topbar__button-icon' />
					</button>
					<button className='topbar__button'>
						<RiAlarmLine className='topbar__button-icon' />
					</button>
					<button>
						<img src={Avatar} alt='avatar' />
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
