import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
import { RiArrowUp } from 'react-icons/ri';
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
						<RiArrowUp />
					</span>
				</div>
			</div>
			<div className='calendar__content'></div>
		</div>
	);
};

export default Calendar;
