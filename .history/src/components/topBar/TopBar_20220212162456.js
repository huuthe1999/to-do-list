import './topbar.css';

const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				{' '}
				<box-icon name='rocket'></box-icon>
				<div className='topbar__inner-leftControl'></div>
				<div className='topbar__inner-rightControl'></div>
			</div>
		</div>
	);
};

export default TopBar;
