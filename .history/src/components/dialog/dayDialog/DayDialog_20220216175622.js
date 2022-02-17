import React from 'react';
import lime from '@material-ui/core/colors/lime';
import { DatePicker } from '@material-ui/pickers';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const materialTheme = createMuiTheme({
	overrides: {
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: lightBlue.A200,
			},
		},
		MuiPickersCalendarHeader: {
			switchHeader: {
				// backgroundColor: lightBlue.A200,
				// color: "white",
			},
		},
		MuiPickersDay: {
			day: {
				color: lightBlue.A700,
			},
			daySelected: {
				backgroundColor: lightBlue['400'],
			},
			dayDisabled: {
				color: lightBlue['100'],
			},
			current: {
				color: lightBlue['900'],
			},
		},
		MuiPickersModal: {
			dialogAction: {
				color: lightBlue['400'],
			},
		},
	},
});

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
