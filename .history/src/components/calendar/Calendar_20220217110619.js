import React from 'react';
import { BsCalendarDate } from 'react-icons/bs';
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
						<RiArrowUpS />
					</span>
				</div>
			</div>
			<div className='calendar__content'></div>
		</div>
	);
};

export default Calendar;
