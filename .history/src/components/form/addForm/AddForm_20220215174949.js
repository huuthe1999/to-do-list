import React, { useState } from 'react';
import { BsAlarm, BsCalendarDay, BsClock, BsTag } from 'react-icons/bs';
import './addForm.scss';
const AddForm = () => {
	const [text, setText] = useState('');
	const handleChange = e => {
		setText(e.target.value);
		console.log(text);
	};
	return (
		<section className='addForm'>
			<form>
				<header className='addForm__header'>
					<h3>add to do</h3>
				</header>
				<main className='addForm__main'>
					<div className='addForm__main--text'>
						<input
							type='text'
							value={text}
							onChange={handleChange}
							placeholder='What would you do ?'
							autoFocus
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
					</div>
					<div className='addForm__main--pickTime'>
						<div className='addForm__main--pickTime-title'>
							<BsClock />
							<p>Choose time</p>
						</div>
					</div>
					<div className='addForm__main--tag'>
						<div className='addForm__main--tag-title'>
							<BsTag />
							<p>Choose a project</p>
						</div>
						<div className='addForm__main--tag-list'>
							<div className=''></div>
							<div className=''></div>
						</div>
					</div>
				</main>
				<footer className='addForm__footer'>kjdwkdjwd</footer>
			</form>
		</section>
	);
};

export default AddForm;
