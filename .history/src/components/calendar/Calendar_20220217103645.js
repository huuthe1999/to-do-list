import React from 'react';

const Calendar = () => {
	return (
		<div className='calendar'>
			<div className='calendar__header'>
				<button className='calendar__header-expand'></button>
			</div>
			<div className='calendar__content'></div>
		</div>
	);
};

export default Calendar;
