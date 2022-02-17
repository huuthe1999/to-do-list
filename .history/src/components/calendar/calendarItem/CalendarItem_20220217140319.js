import './calendarItem.scss';

const CalendarItem = ({ name }) => {
	return (
		<li className='calendar__content--item'>
			<span className='calendar__content--item-icon'>
				<MdOutlineCalendarToda />
			</span>
			<span className='calendar__content--item-content'></span>
		</li>
	);
};

export default CalendarItem;
