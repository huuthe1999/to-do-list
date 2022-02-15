import { useState } from 'react';
import {
	RiAddLine,
	RiHomeLine,
	RiMenuLine,
	RiNotification2Line,
	RiQuestionLine,
	RiSearchLine,
} from 'react-icons/ri';
import Avatar from '../../assets/images/avatar.png';
import Modal from '../modal/Modal';
import './topbar.scss';
const TopBar = () => {
	const [modal, setShowModal] = useState(false);
	return (
		<header className='topbar'>
			<div className='topbar__inner'>
				<div className='topbar__inner-leftControl'>
					<button className='topbar__button leftControl'>
						<RiMenuLine className='topbar__button-icon' />
					</button>

					<button className='topbar__button leftControl'>
						<RiHomeLine className='topbar__button-icon' />
					</button>
					<div className='topbar__inner-leftControl-search'>
						<RiSearchLine className='topbar__button-icon topbar__button-icon-search' />
						<input type='text' placeholder='Search' />
					</div>
				</div>
				<div className='topbar__inner-rightControl'>
					<Modal showModal={modal} setShowModal={setShowModal}>
						<section className='addForm'>
							<form>
								<header className='addForm__header'>
									<h3>add to do</h3>
								</header>
								<main className='addForm__main'>
									<div className='addForm__main-text'>
										<input
											type='text'
											placeholder='What would you do ?'
											autoFocus
										/>
									</div>
									<div className='addForm__main-remind'>
										<p>remind me</p>
									</div>
									<div className='addForm__main-pickDay'></div>
									<div className='addForm__main-pickTime'></div>
									<div className='addForm__main-tag'></div>
								</main>
								<footer className='addForm__footer'>
									kjdwkdjwd
								</footer>
							</form>
						</section>
					</Modal>
					<button className='topbar__button rightControl'>
						<RiAddLine
							className='topbar__button-icon'
							onClick={() => setShowModal(true)}
						/>
					</button>
					<button className='topbar__button rightControl'>
						<RiQuestionLine className='topbar__button-icon' />
					</button>
					<button className='topbar__button rightControl'>
						<RiNotification2Line className='topbar__button-icon' />
					</button>
					<button className='topbar__button info'>
						<img src={Avatar} alt='avatar' />
						<p>Jackson Statham</p>
					</button>
				</div>
			</div>
		</header>
	);
};

export default TopBar;
