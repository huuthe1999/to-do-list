import './calendarItem.scss';

const CalendarItem = ({ name }) => {
	return <li className='calendar__content--item'>{name}</li>;
};

export default CalendarItem;
