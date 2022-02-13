import './topbar.css';
import { BiMenu, BiHome } from 'react-icons/bi';
const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button>
						<BiMenu color='red' size='sm' border='square|circle' />
					</button>
					<button>
						<BiHome />
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
