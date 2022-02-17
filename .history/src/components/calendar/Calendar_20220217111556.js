import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import { BsCaretUp } from 'react-icons/bs';

const calendarList = [{ id: 1, name: '' }];
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
					<div className='calendar__content--wrapper--inner'></div>
				</div>
			</div>
		</div>
	);
};

export default Calendar;
