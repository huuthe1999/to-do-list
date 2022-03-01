import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import { createTheme } from '@material-ui/core';
import { lightBlue } from '@material-ui/core/colors';
import {
	DatePicker,
	MuiPickersUtilsProvider,
	TimePicker,
} from '@material-ui/pickers';
import { ThemeProvider } from '@material-ui/styles';
import { useEffect, useState } from 'react';
import { BsAlarm, BsCalendarDay, BsClock, BsTag, BsXLg } from 'react-icons/bs';
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
	useEffect(() => {
		if (projectList) {
			setAllowAddForm(
				title && todoProject && projectList.length > 0 ? true : false,
			);
			return;
		}
		setAllowAddForm(title ? true : false);
	}, [title, todoProject, projectList]);
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
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
									rows={3}
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
									format='dd/MM/yyyy'
									disablePast
									onChange={handleChangeDay}
								/>
							</div>
							<div className='todoForm__main--pickTime'>
								<div className='todoForm__main--pickTime-title'>
									<BsClock />
									<p>Choose time</p>
								</div>
								<TimePicker
									value={time}
									format='HH:mm'
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
										projectList.map(project => (
											<div
												key={project._id}
												className={`${
													todoProject.name ===
													project.name
														? 'active'
														: ''
												}`}
												onClick={() =>
													setTodoProject(project)
												}>
												{todoProject.name}
											</div>
										))
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
								onClick={setShowModal}>
								Cancel
							</button>
						</footer>
					</form>
				</section>
			</ThemeProvider>
		</MuiPickersUtilsProvider>
	);
};

export default TodoForm;
