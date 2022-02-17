import { createTheme } from '@material-ui/core';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { DatePicker } from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import React from 'react';

const DayDialog = ({ selectedDate, handleDateChange }) => {
	return <ThemeProvider theme={materialTheme}></ThemeProvider>;
};

export default DayDialog;
