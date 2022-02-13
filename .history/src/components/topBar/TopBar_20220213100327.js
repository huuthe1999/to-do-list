import './topbar.css';

const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button>
						<box-icon name='menu'></box-icon>
					</button>
					<button>
						<box-icon name='home'></box-icon>
					</button>
				</div>
				<div className='topbar__inner-rightControl'></div>
			</div>
		</div>
	);
};

export default TopBar;
