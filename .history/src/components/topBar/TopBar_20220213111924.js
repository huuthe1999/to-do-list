import './topbar.css';
import { RiMenuLine, RiHomeLine } from 'react-icons/ri';
const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button>
						<RiHomeLine color={`var(--icon-color)`} />
					</button>
					<button>
						<RiMenuLine
							color={`var(--icon-color)`}
							size={`var(--icon-size)`}
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
