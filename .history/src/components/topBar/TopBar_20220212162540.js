import './topbar.css';

const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				<box-icon type='solid' name='rocket'></box-icon>
				<box-icon name='rocket'></box-icon>
				<div className='topbar__inner-leftControl'></div>
				<div className='topbar__inner-rightControl'></div>
			</div>
		</div>
	);
};

export default TopBar;
