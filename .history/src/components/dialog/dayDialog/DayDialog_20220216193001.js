import { createTheme } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { DatePicker } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

const materialTheme = createTheme({
    overrides: {
        MuiInput: {
            underline: {
                ':hover'
            }
        },
		MuiPickersToolbar: {
			toolbar: {
				backgroundColor: lightBlue.A200,
			},
		},
		MuiPickersCalendarHeader: {
			switchHeader: {
				// backgroundColor: lightBlue.A200,
				// color: 'white',
			},
		},
		MuiPickersDay: {
			day: {
				color: lightBlue.A700,
				'&:hover': {
					backgroundColor: lightBlue[100],
				},
			},
			daySelected: {
				backgroundColor: lightBlue['400'],
				'&:hover': {
					backgroundColor: lightBlue['400'],
					color: '#fff',
				},
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
		MuiButton: {
			textPrimary: {
				color: lightBlue[900],
			},
		},
	},
});

const DayDialog = ({ selectedDate, handleDateChange }) => {
	return (
		<ThemeProvider theme={materialTheme}>
			<DatePicker
				value={selectedDate}
				format='dd/MM/yyyy'
				disablePast
				onChange={handleDateChange}
			/>
		</ThemeProvider>
	);
};

export default DayDialog;
