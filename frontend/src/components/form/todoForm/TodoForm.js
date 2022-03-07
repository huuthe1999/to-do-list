// import DateFnsUtils from '@date-io/date-fns'; // choose your lib
// import { createTheme } from '@material-ui/core';
// import { lightBlue } from '@material-ui/core/colors';
// import {
// 	DatePicker,
// 	MuiPickersUtilsProvider,
// 	TimePicker,
// } from '@material-ui/pickers';
// import { ThemeProvider } from '@material-ui/styles';
import { DatePicker, LocalizationProvider, TimePicker } from '@mui/lab';
import DateAdapter from '@mui/lab/AdapterMoment';
import { lightBlue } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import { ThemeProvider } from '@mui/styles';
import { useEffect, useState } from 'react';
import { BsAlarm, BsCalendarDay, BsClock, BsTag, BsXLg } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { selectProject } from '../../../features/project/projectSlice';
import { checkCalenderItem } from '../../../helpers/checkCalenderItem';
import './todoForm.scss';

const materialTheme = createTheme({
	palette: {
		primary: {
			main: lightBlue.A700,
		},
	},
});

const TodoForm = ({
	handleSubmit,
	titleForm,
	title,
	handleChangeTitle,
	description,
	handleChangeDescription,
	day,
	handleChangeDay,
	time,
	handleChangeTime,
	projectList,
	todoProject,
	setTodoProject,
	textButton,
	setShowModal,
	allowAddTodoSelectedForm,
}) => {
	const [allowAddForm, setAllowAddForm] = useState(false);
	const checkItemCalender = checkCalenderItem(todoProject);
	const projectSelected = useSelector(selectProject);
	useEffect(() => {
		if (projectList) {
			//Check any existing project
			setAllowAddForm(
				!checkItemCalender &&
					projectList.length > 0 &&
					title &&
					todoProject
					? true
					: false,
			);
			return;
		}
		setAllowAddForm(title ? true : false); //Check title not empty
	}, [title, todoProject, projectList, checkItemCalender]);
	return (
		<LocalizationProvider dateAdapter={DateAdapter}>
			<ThemeProvider theme={materialTheme}>
				<section className='todoForm'>
					<form onSubmit={handleSubmit}>
						<header className='todoForm__header'>
							{titleForm && <h3>{titleForm}</h3>}
							<span
								className='todoForm__close'
								onClick={setShowModal}>
								<BsXLg />
							</span>
						</header>
						<main className='todoForm__main'>
							<div className='todoForm__main--text'>
								<input
									type='text'
									value={title}
									onChange={handleChangeTitle}
									placeholder='What would you do ?'
									autoFocus
								/>
								<textarea
									type='text'
									value={description}
									onChange={handleChangeDescription}
									placeholder='Description'
								/>
							</div>
							<div className='todoForm__main--remind'>
								<BsAlarm />
								<p>Remind Me</p>
							</div>
							<div className='todoForm__main--pickDay'>
								<div className='todoForm__main--pickDay-title'>
									<BsCalendarDay />
									<p>Choose a day</p>
								</div>
								<DatePicker
									value={day}
									mask=''
									inputFormat='dddd, DD/MM/YYYY'
									orientation='landscape'
									disablePast
									onChange={handleChangeDay}
									renderInput={params => (
										<TextField
											variant='standard'
											{...params}
										/>
									)}
								/>
							</div>
							<div className='todoForm__main--pickTime'>
								<div className='todoForm__main--pickTime-title'>
									<BsClock />
									<p>Choose time</p>
								</div>
								<TimePicker
									renderInput={params => (
										<TextField
											variant='standard'
											{...params}
										/>
									)}
									value={time}
									mask=''
									inputFormat='HH:mm A'
									ampm={false}
									minutesStep={5}
									onChange={handleChangeTime}
								/>
							</div>
							<div className='todoForm__main--tag'>
								<div className='todoForm__main--tag-title'>
									<BsTag />
									{allowAddTodoSelectedForm ? (
										<p>Default project</p>
									) : (
										<p>Choose a project</p>
									)}
								</div>
								<div className='todoForm__main--tag-list'>
									{projectList && projectList.length > 0 ? (
										projectList.map(project => {
											let checkActiveProject = true;
											if (todoProject.name) {
												checkActiveProject =
													todoProject.name ===
													project.name;
											} else {
												checkActiveProject =
													projectSelected.name ===
													project.name;
											}
											return (
												<div
													key={project._id}
													className={`${
														checkActiveProject &&
														!checkItemCalender
															? 'active'
															: ''
													}`}
													onClick={() =>
														setTodoProject(project)
													}>
													{project.name}
												</div>
											);
										})
									) : allowAddTodoSelectedForm ? (
										<div
											className='active'
											style={{ cursor: 'not-allowed' }}>
											{todoProject.name}
										</div>
									) : (
										<div
											style={{
												color: 'red',
												cursor: 'not-allowed',
											}}>
											Please add some projects before
											starting
										</div>
									)}
								</div>
							</div>
						</main>
						<footer className='todoForm__footer'>
							<button
								type='submit'
								disabled={allowAddForm ? false : true}
								className={`todoForm__footer-button ${
									!allowAddForm ? 'disabled' : ''
								}`}>
								{textButton}
							</button>
							<button
								className='todoForm__footer-button'
								onClick={() => {
									setShowModal();
								}}>
								Cancel
							</button>
						</footer>
					</form>
				</section>
			</ThemeProvider>
		</LocalizationProvider>
	);
};

export default TodoForm;
