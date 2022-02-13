import './topbar.css';

const TopBar = () => {
	return (
		<div className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button>
						<box-icon
							name='menu'
							color={'var(--icon-color)'}></box-icon>
					</button>
					<button>
						<box-icon
							name='home'
							color={'var(--icon-color)'}></box-icon>
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
