import React from 'react';
import { DatePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
const DayDialog = ({ selectedDate, handleDateChange }) => {
	return (
		<DatePicker
			value={selectedDate}
			format='dd/MM/yyyy'
			disablePast
			onChange={handleDateChange}
		/>
	);
};

export default DayDialog;
