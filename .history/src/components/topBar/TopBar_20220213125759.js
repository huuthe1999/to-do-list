import { RiHomeLine, RiMenuLine, RiSearchLine } from 'react-icons/ri';
import './topbar.scss';
const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button>
						<RiMenuLine
							color={`var(--icon-color)`}
							size='24px'
							className='topbar__icon'
						/>
					</button>
					<button>
						<RiHomeLine color={`var(--icon-color)`} size='24px' />
					</button>
					<div className='topbar__inner-leftControl-search'>
						<RiSearchLine color={`var(--icon-color)`} size='24px' />
						<input type='text' />
					</div>
				</div>
				<div className='topbar__inner-rightControl'></div>
			</div>
		</div>
	);
};

export default TopBar;
