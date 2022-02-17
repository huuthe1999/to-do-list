import './calendarItem.scss';
import { MdOutlineCalendarToday } from 'react-icons/md';
const CalendarItem = ({ name }) => {
	return (
		<li className='calendar__content--item'>
			<span className='calendar__content--item-icon'>
				<MdOutlineCalendarToday />
			</span>
			<span className='calendar__content--item-content'></span>
		</li>
	);
};

export default CalendarItem;
