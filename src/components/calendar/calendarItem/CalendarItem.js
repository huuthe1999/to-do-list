import './calendarItem.scss';
const CalendarItem = ({ name, icon, size }) => {
	return (
		<li className='calendar__content--item'>
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