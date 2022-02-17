import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
const Calendar = () => {
	return (
		<div className='calendar'>
			<div className='calendar__header'>
				<button className='calendar__header-title'>
					<BsCalendarDate />
					Calendar
				</button>
			</div>
			<div className='calendar__content-actions'>
				<button></button>
			</div>
		</div>
	);
};

export default Calendar;
