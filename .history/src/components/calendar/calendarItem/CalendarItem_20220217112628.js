import './calendarItem.scss';

const CalendarItem = ({ id, name }) => {
	return <li key={id}>{name}</li>;
};

export default CalendarItem;
