import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { BsCaretUp } from 'react-icons/bs';
import {
	IoCalendarClearOutline,
	IoCalendarNumberOutline,
	IoCalendarOutline,
	IoTodayOutline,
} from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import {
	filterTodoListByToday,
	filterTodoListByTomorrow,
	filterTodoListByWeek,
	selectTodo,
} from '../../features/todo/todoSlice';
import './calendar.scss';
import CalendarItem from './calendarItem/CalendarItem';
const calendarList = [
	{
		id: 1,
		name: 'Today',
		icon: <IoCalendarClearOutline size='24px' color='#246fe0' />,
	},
	{
		id: 2,
		name: 'Tomorrow',
		icon: <IoTodayOutline size='24px' color='#058527' />,
	},
	{
		id: 3,
		name: 'Next Week',
		icon: <IoCalendarOutline size='24px' color='#692fc2' />,
	},
];

// const calendarContainer = {
// 	hidden: {
// 		maxHeight: 0,
// 		transition: {
// 			// when: 'afterChildren',
// 			ease: 'easeInOut',
// 			staggerChildren: 0.1,
// 			staggerDirection: -1,
// 			duration: 2,
// 		},
// 	},
// 	show: {
// 		maxHeight: '100%',
// 		transition: {
// 			when: 'beforeChildren',
// 			staggerChildren: 0.1,
// 			duration: 0.2,
// 			ease: 'easeInOut',
// 		},
// 	},
// };
const calendarContainer = {
	hidden: {
		height: 44,
		transition: {
			// when: 'afterChildren',
			ease: 'easeInOut',
			staggerChildren: 0.1,
			staggerDirection: -1,
			duration: 0.5,
		},
	},
	show: {
		height: 'fit-content',
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.1,
			duration: 0.2,
			ease: 'easeInOut',
		},
	},
};
const Calendar = () => {
	const dispatch = useDispatch();
	const [showMenu, setShowMenu] = useState(true);
	const todo = useSelector(selectTodo);
	useEffect(() => {
		dispatch(filterTodoListByToday());
	}, [dispatch, todo]);

	useEffect(() => {
		dispatch(filterTodoListByTomorrow());
	}, [dispatch, todo]);

	useEffect(() => {
		dispatch(filterTodoListByWeek());
	}, [dispatch, todo]);
	return (
		<motion.div
			variants={calendarContainer}
			initial='hidden'
			animate={showMenu ? 'show' : 'hidden'}
			className='calendar'>
			<div className='calendar__header'>
				<div className='calendar__header--title'>
					<IoCalendarNumberOutline size='24px' />
					<p>Calendar</p>
				</div>
				<div className='calendar__header--expand'>
					<motion.span
						initial={false}
						animate={{ rotate: showMenu ? 0 : 180 }}
						transition={{
							duration: 0.2,
						}}
						whileTap={{
							rotate: 180,
							scale: 0.8,
						}}
						whileHover={{
							scale: 1.2,
						}}
						onClick={() => setShowMenu(!showMenu)}>
						<BsCaretUp
							title={`${
								showMenu
									? 'Click to expand'
									: 'Click to collapse'
							}`}
						/>
					</motion.span>
				</div>
			</div>
			<div className='calendar__content'>
				<ul className='calendar__content--list'>
					<AnimatePresence>
						{calendarList.map((item, index) => (
							<CalendarItem
								key={item.id}
								index={index}
								item={item}
							/>
						))}
					</AnimatePresence>
				</ul>
			</div>
		</motion.div>
	);
};

export default Calendar;
