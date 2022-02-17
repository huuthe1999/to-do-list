import React from 'react';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { DatePicker } from '@material-ui/pickers';
import { createTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';

const materialTheme = createTheme({
	overrides: {
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: lightBlue.A200,
			},
		},
		MuiPickersCalendarHeader: {
			switchHeader: {
				backgroundColor: lightBlue.A200,
				color: 'white',
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
		<ThemeProvider theme={materialTheme}>
			<DatePicker
				label='Light blue picker'
				value={selectedDate}
				format='dd/MM/yyyy'
				disablePast
				onChange={handleDateChange}
			/>
		</ThemeProvider>
	);
};

export default DayDialog;
