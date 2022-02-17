import './calendarItem.scss';
const CalendarItem = ({ name }) => {
	return (
		<li className='calendar__content--item'>
			<span className='calendar__content--item-icon'>
				<MdOutlineCalendarToday />
			</span>
			<span className='calendar__content--item-content'>
				{name}
				<small>3</small>
			</span>
		</li>
	);
};

export default CalendarItem;
