import './topbar.css';

const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button>
						<i class='bx bx-menu bx-sm'></i>
					</button>
					<button>
						<i class='bx bx-home'></i>
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
