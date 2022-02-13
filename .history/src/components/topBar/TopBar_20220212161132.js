import './topbar.css';

const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				<i class='bx bx-hot'></i>
				<div className='topbar__inner-leftControl'></div>
				<div className='topbar__inner-rightControl'></div>
			</div>
		</div>
	);
};

export default TopBar;
