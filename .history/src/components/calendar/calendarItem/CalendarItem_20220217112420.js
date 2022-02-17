import './calendarItem.scss';

const CalendarItem = ({ key, name }) => {
	return <li key={key}>{name}</li>;
};

export default CalendarItem;
