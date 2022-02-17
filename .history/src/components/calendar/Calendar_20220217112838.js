import React from 'react';
import { BsCalendarDate, BsCaretUp } from 'react-icons/bs';
import CalendarItem from './calendarItem/CalendarItem';

const calendarList = [
	{ id: 1, name: 'Today' },
	{ id: 2, name: 'Tomorrow' },
	{ id: 3, name: 'Next Week' },
];
const Calendar = () => {
	return (
		<div className='calendar'>
			<div className='calendar__header'>
				<button className='calendar__header--title'>
					<BsCalendarDate />
					<p>Calendar</p>
				</button>
				<div className='calendar__header--expand'>
					<span>
						<BsCaretUp />
					</span>
				</div>
			</div>
			<div className='calendar__content'>
				<div className='calendar__content--wrapper'>
					<div className='calendar__content--wrapper--inner'>
						<ul>
							{calendarList.map(({ id, name }) => (
								<CalendarItem key={id} name={name} />
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
