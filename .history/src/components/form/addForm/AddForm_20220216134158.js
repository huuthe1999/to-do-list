import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {
	DatePicker,
	TimePicker,
	DateTimePicker,
	MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import React, { useState } from 'react';
import { BsAlarm, BsCalendarDay, BsClock, BsTag, BsXLg } from 'react-icons/bs';
import './addForm.scss';
const AddForm = ({ setShowModal }) => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState(new Date());

	const handleDateChange = day => {
		setSelectedDate(day);
	};
	const handleTimeChange = time => {
		setSelectedTime(time);
	};
	const handleChangeTitle = e => {
		setTitle(e.target.value);
	};
	const handleChangeDescription = e => {
		setDescription(e.target.value);
	};
	return (
		<MuiPickersUtilsProvider dateAdapter={AdapterDateFns}>
			<section className='addForm'>
				<span
					className='addForm__close'
					onClick={() => setShowModal(false)}>
					<BsXLg />
				</span>
				<form>
					<header className='addForm__header'>
						<h3>add new to do</h3>
					</header>
					<main className='addForm__main'>
						<div className='addForm__main--text'>
							<input
								type='text'
								value={title}
								onChange={handleChangeTitle}
								placeholder='What would you do ?'
								autoFocus
							/>
							<textarea
								type='text'
								rows={3}
								value={description}
								onChange={handleChangeDescription}
								placeholder='Description'
							/>
						</div>
						<div className='addForm__main--remind'>
							<BsAlarm />
							<p>remind me</p>
						</div>
						<div className='addForm__main--pickDay'>
							<div className='addForm__main--pickDay-title'>
								<BsCalendarDay />
								<p>Choose a day</p>
							</div>
							<DatePicker
								value={selectedDate}
								format='dd/MM/yyyy'
								disablePast
								onChange={handleDateChange}
							/>
						</div>
						<div className='addForm__main--pickTime'>
							<div className='addForm__main--pickTime-title'>
								<BsClock />
								<p>Choose time</p>
							</div>
							<TimePicker
								value={selectedTime}
								format='HH:mm'
								ampm={false}
								minutesStep={5}
								onChange={handleTimeChange}
							/>
						</div>
						<div className='addForm__main--tag'>
							<div className='addForm__main--tag-title'>
								<BsTag />
								<p>Choose a project</p>
							</div>
							<div className='addForm__main--tag-list'>
								<div className='active'>personal</div>
								<div className=''>work</div>
								<div className=''>work</div>
								<div className=''>work</div>
								<div className=''>work</div>
								<div className=''>work</div>
								<div className=''>work</div>
							</div>
						</div>
					</main>
					<footer className='addForm__footer'>
						<button className='addForm__footer-button'>
							Add Task
						</button>
						<button className='addForm__footer-button'>
							Cancel
						</button>
					</footer>
				</form>
			</section>
		</MuiPickersUtilsProvider>
	);
};

export default AddForm;
