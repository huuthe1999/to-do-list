import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import { BsCaretUp } from 'react-icons/bs';
const Calendar = () => {
	return (
		<div className='calendar'>
			<div className='calendar__header'>
				<button className='calendar__header-title'>
					<BsCalendarDate />
					<p>Calendar</p>
				</button>
				<div className='calendar__header-expand'>
					<span>
						<BsCaretUp />
					</span>
				</div>
			</div>
			<div className='calendar__content'>
				<div className='collapse'></div>
			</div>
		</div>
	);
};

export default Calendar;
