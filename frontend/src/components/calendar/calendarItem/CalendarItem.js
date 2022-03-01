import { useDispatch, useSelector } from 'react-redux';
import {
	selectProject,
	setSelectProject,
} from '../../../features/project/projectSlice';
import './calendarItem.scss';
const CalendarItem = ({ name, icon, size }) => {
	const dispatch = useDispatch();
	const projectSelected = useSelector(selectProject);
	return (
		<li
			style={{
				backgroundColor:
					projectSelected === name ? '#b3b3b3' : undefined,
			}}
			onClick={() => dispatch(setSelectProject(name))}
			className='calendar__content--item'>
			<span className='calendar__content--item-icon'>{icon}</span>
			<p>{name}</p>
			<div className='calendar__content--item-content'>
				{size === 0 ? (
					''
				) : size > 9 ? (
					<small>
						9<sup>+</sup>
					</small>
				) : (
					<small>{size}</small>
				)}
			</div>
		</li>
	);
};

export default CalendarItem;
