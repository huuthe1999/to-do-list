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
					<button className='topbar__button rightControl'>
						<RiAddLine className='topbar__button-icon' />
					</button>
					<button className='topbar__button rightControl'>
						<RiQuestionLine className='topbar__button-icon' />
					</button>
					<button className='topbar__button rightControl'>
						<RiAlarmLine className='topbar__button-icon' />
					</button>
					<button className='topbar__button info'>
						<img src={Avatar} alt='avatar' />
						<p>Jackson Statham</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default TopBar;
