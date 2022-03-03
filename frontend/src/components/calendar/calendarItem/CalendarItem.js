import { useDispatch, useSelector } from 'react-redux';
import { defaultTodoList } from '../../../assets/data';
import {
	selectProject,
	setSelectProject,
} from '../../../features/project/projectSlice';
import { selectTodoListByDay } from '../../../features/todo/todoSlice';
import './calendarItem.scss';
const CalendarItem = ({ name, icon }) => {
	const dispatch = useDispatch();
	const project = useSelector(selectProject);
	const todoListByDay = useSelector(selectTodoListByDay);
	const sizeProject =
		name === defaultTodoList[0]
			? 9
			: name === defaultTodoList[1]
			? 8
			: todoListByDay.length;
	return (
		<li
			style={{
				backgroundColor: project === name ? '#b3b3b3' : undefined,
			}}
			onClick={() => dispatch(setSelectProject(name))}
			className='calendar__content--item'>
			<span className='calendar__content--item-icon'>{icon}</span>
			<p>{name}</p>
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
		</li>
	);
};

export default CalendarItem;
