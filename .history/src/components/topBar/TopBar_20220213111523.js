import './topbar.css';
import { BiMenu, BiHome } from 'react-icons/bi';
const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button>
						<BiMenu color={`var(--icon-color)`} size='24px' />
					</button>
					<button>
						<BiHome color={`var(--icon-color)`} />
					</button>
					<div className='topbar__inner-leftControl-search'>
						<input type='text' />
					</div>
				</div>
				<div className='topbar__inner-rightControl'></div>
			</div>
		</div>
	);
};

export default TopBar;
