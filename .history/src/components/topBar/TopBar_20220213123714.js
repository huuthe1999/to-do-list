import { RiHomeLine, RiMenuLine } from 'react-icons/ri';
import './topbar.css';
const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button>
						<RiMenuLine size='24px' />
					</button>
					<button>
						<RiHomeLine
							color={`var(--icon-color)`}
							size={'var(--icon-size)'}
						/>
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
