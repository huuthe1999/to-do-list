import React from 'react';
import { BsCalendar2Plus, BsCalendarDate, BsCaretUp } from 'react-icons/bs';
import { IoTodayOutline, IoCalendarOutline } from 'react-icons/io5';
import './calendar.scss';
import CalendarItem from './calendarItem/CalendarItem';
const calendarList = [
	{ id: 1, name: 'Today', icon: <IoTodayOutline size='24px' /> },
	{ id: 2, name: 'Tomorrow', icon: <BsCalendar2Plus size='23px' /> },
	{ id: 3, name: 'Next Week', icon: <IoCalendarOutline size='24px' /> },
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
						<ul className='calendar__content--list'>
							{calendarList.map(({ id, name, icon }) => (
								<CalendarItem
									key={id}
									name={name}
									icon={icon}
								/>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
