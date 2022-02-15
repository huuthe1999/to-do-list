import React, { useState } from 'react';
import { BsAlarm } from 'react-icons/bs';
import './addForm.scss';
const AddForm = () => {
	const [text, setText] = useState('s');
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
					<div className='addForm__main-text'>
						<input
							type='text'
							value={text}
							onChange={handleChange}
							placeholder='What would you do ?'
							autoFocus
						/>
					</div>
					<div className='addForm__main-remind'>
						<BsAlarm />
						<p>remind me</p>
					</div>
					<div className='addForm__main-pickDay'></div>
					<div className='addForm__main-pickTime'></div>
					<div className='addForm__main-tag'></div>
				</main>
				<footer className='addForm__footer'>kjdwkdjwd</footer>
			</form>
		</section>
	);
};

export default AddForm;
