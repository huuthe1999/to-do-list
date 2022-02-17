import React from 'react';

const Calendar = () => {
	return (
		<div className='calendar'>
			<div className='calendar__header'>
				<button className='calendar__header-title'></button>
				<BsCalendarDate />
			</div>
			<div className='calendar__content-actions'>
				<button></button>
			</div>
		</div>
	);
};

export default Calendar;
