import './calendarItem.scss';
const CalendarItem = ({ name, icon }) => {
	return (
		<li className='calendar__content--item'>
			<span className='calendar__content--item-icon'>{icon}</span>
			<span className='calendar__content--item-content'>
				<p>{name}</p>
				<small>3</small>
			</span>
		</li>
	);
};

export default CalendarItem;
