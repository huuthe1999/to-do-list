import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { defaultTodoList } from '../../../assets/data';
import {
	selectProject,
	setSelectProject,
} from '../../../features/project/projectSlice';
import {
	selectTodoListByDay,
	selectTodoListByToday,
	selectTodoListByTomorrow,
} from '../../../features/todo/todoSlice';
import './calendarItem.scss';
const calendarItem = {
	hidden: {
		opacity: 0,
		x: '100%',
	},
	show: {
		opacity: 1,
		x: 0,
	},
};
const CalendarItem = ({ item, index }) => {
	const dispatch = useDispatch();
	const todoListByToday = useSelector(selectTodoListByToday);
	const todoListByTomorrow = useSelector(selectTodoListByTomorrow);
	const project = useSelector(selectProject);
	const todoListByDay = useSelector(selectTodoListByDay);
	const sizeProject =
		item.name === defaultTodoList[0]
			? todoListByToday.length
			: item.name === defaultTodoList[1]
			? todoListByTomorrow.length
			: todoListByDay.length;
	return (
		<motion.li
			variants={calendarItem}
			exit={{
				opacity: 0,
				x: '-100%',
			}}
			whileHover={{
				scale: 1.05,
				originX: 0,
				boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)',
			}}
			style={{
				backgroundColor: project === item.name ? '#6accbc' : undefined,
			}}
			onClick={() => dispatch(setSelectProject(item.name))}
			className='calendar__content--item'>
			<span className='calendar__content--item-icon'>{item.icon}</span>
			<p>{item.name}</p>
			<div className='calendar__content--item-content'>
				{sizeProject === 0 ? (
					''
				) : sizeProject > 9 ? (
					<small>
						9<sup>+</sup>
					</small>
				) : (
					<small>{sizeProject}</small>
				)}
			</div>
		</motion.li>
	);
};

export default CalendarItem;
