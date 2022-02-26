import React from 'react';
import { BsCaretUp } from 'react-icons/bs';
import {
	IoCalendarClearOutline,
	IoCalendarNumberOutline,
	IoCalendarOutline,
	IoTodayOutline,
} from 'react-icons/io5';
import './calendar.scss';
import CalendarItem from './calendarItem/CalendarItem';
const calendarList = [
	{
		id: 1,
		name: 'Today',
		icon: <IoCalendarClearOutline size='24px' color='#246fe0' />,
		size: 0,
	},
	{
		id: 2,
		name: 'Tomorrow',
		icon: <IoTodayOutline size='24px' color='#058527' />,
		size: 8,
	},
	{
		id: 3,
		name: 'Next Week',
		icon: <IoCalendarOutline size='24px' color='#692fc2' />,
		size: 12,
	},
];
const Calendar = () => {
	return (
		<div className='calendar'>
			<div className='calendar__header'>
				<div className='calendar__header--title'>
					<IoCalendarNumberOutline size='24px' />
					<p>Calendar</p>
				</div>
				<div className='calendar__header--expand'>
					<span>
						<BsCaretUp />
					</span>
				</div>
			</div>
			<div className='calendar__content'>
				<div className='calendar__content--wrapper'>
					<div className='calendar__content--wrapper--inner'>
						<ul className='calendar__content--list'>
							{calendarList.map(({ id, ...rest }) => (
								<CalendarItem key={id} {...rest} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
