import { motion } from 'framer-motion';
import { useContext, useRef } from 'react';
import { IoCloseOutline, IoMenuSharp } from 'react-icons/io5';
import { ToggleContext } from '../../contexts/toggleContext';
import Calendar from '../calendar/Calendar';
import ProjectList from '../projectList/ProjectList';
import './sideBar.scss';
const nav = {
	closed: {
		x: '-100%',
		opacity: 0,
		minWidth: 0,
		// width: 0,
		transition: {
			duration: 0.3,
			ease: [0.57, 0.21, 0.69, 1.25],
		},
	},
	open: {
		x: 0,
		opacity: 1,
		minWidth: '270px',
		// width: '300px',
		transition: {
			duration: 0.2,
			ease: [0.57, 0.21, 0.69, 1.25],
			type: 'spring',
			stiffness: 50,
			damping: 10,
		},
	},
};

const overlay = {
	closed: {
		x: '-100%',
		opacity: 0,
		width: 0,
		transition: {
			duration: 0.3,
			ease: 'easeOut',
		},
	},
	open: {
		x: 0,
		opacity: 1,
		width: '100%',
		transition: {
			duration: 0.3,
			ease: 'easeIn',
		},
	},
};

const button = {
	closed: {
		boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
	},
	open: {
		backgroundColor: '#fafafa',
		boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
		transition: {
			type: 'spring',
			stiffness: 200,
			damping: 10,
		},
	},
};

const SideBar = () => {
	const sidebarRef = useRef();
	const closeModal = e => {
		if (e.target === sidebarRef.current) {
			toggleOpen();
		}
	};
	const { isOpen, toggleOpen } = useContext(ToggleContext);
	return (
		<>
			<motion.div
				initial='closed'
				variants={nav}
				animate={isOpen ? 'open' : 'closed'}
				className='sidebar'>
				<div className='sidebar__layout'>
					<div className='sidebar__layout-header'></div>
					<div className='sidebar__layout-content'>
						<Calendar />
						<ProjectList />
						{/* <div className='sidebar__layout-footer'>
							<a
								href='https://github.com/huuthe1999/to-do-list'
								rel='noreferrer'
								target='_blank'>
								<img src={image} alt='Github repository' />
							</a>
						</div> */}
					</div>
				</div>
			</motion.div>
			<motion.div
				initial='closed'
				animate={isOpen ? 'open' : 'closed'}
				variants={overlay}
				className='sidebar__overlay'
				ref={sidebarRef}
				onClick={closeModal}
			/>
			<motion.button
				initial='closed'
				animate={isOpen ? 'open' : 'closed'}
				variants={button}
				className='btn__toggle'
				onClick={() => toggleOpen()}>
				{isOpen ? (
					<IoCloseOutline size={30} />
				) : (
					<IoMenuSharp size={30} />
				)}
			</motion.button>
		</>
	);
};

export default SideBar;
