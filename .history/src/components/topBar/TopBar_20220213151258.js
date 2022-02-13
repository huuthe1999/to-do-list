import { RiHomeLine, RiMenuLine, RiSearchLine } from 'react-icons/ri';
import './topbar.scss';
const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button>
						<RiMenuLine className='topbar__icon' />
					</button>
					<button>
						<RiHomeLine
							className='topbar__icon'
							title='wdwijdiwjdiw'
						/>
					</button>
					<div className='topbar__inner-leftControl-search'>
						<RiSearchLine className='topbar__icon topbar__icon-search' />
						<input type='text' placeholder='Search' />
					</div>
				</div>
				<div className='topbar__inner-rightControl'></div>
			</div>
		</div>
	);
};

export default TopBar;
