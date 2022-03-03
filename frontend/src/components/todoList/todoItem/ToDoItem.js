import moment from 'moment';
import React, { useState } from 'react';
import {
	BsArrowCounterclockwise,
	BsCheckCircleFill,
	BsCircle,
	BsTrash,
} from 'react-icons/bs';
import './todoItem.scss';
const ToDoItem = ({ todo, nameProject }) => {
	const [hoverCheck, setHoverCheck] = useState(false);
	const [hoverTasks, setHoverTasks] = useState(false);

	const dateFormat = moment(todo.date).format('dddd, DD/MM/YYYY');
	const timeFormat = moment(todo.date).format('HH:mm A ');
	return (
		<div className='todoItem'>
			<div className='todoItem__container'>
				<div
					onMouseEnter={() => setHoverCheck(true)}
					onMouseLeave={() => setHoverCheck(false)}
					className='todoItem__container--check'>
					{todo.checked ? (
						<span>
							<BsCheckCircleFill color='#bebebe' />
						</span>
					) : hoverCheck ? (
						<span>
							<BsCheckCircleFill color='#bebebe' />
						</span>
					) : (
						<span>
							<BsCircle color={todo.color} />
						</span>
					)}
				</div>
				<div
					onMouseEnter={() => setHoverTasks(true)}
					onMouseLeave={() => setHoverTasks(false)}
					className='todoItem__container--contentWrapper'>
					<div className='todoItem__container--content'>
						<p>{todo.name}</p>
						<span>
							{dateFormat} - {timeFormat} -{' '}
							{todo.nameProject ? todo.nameProject : nameProject}
						</span>
						<div
							className={`todoItem__container--content-line ${
								todo.checked ? 'line-through' : ''
							}`}></div>
					</div>

					{todo.checked && (
						<div className='todoItem__container--undo todoItem__container--actions'>
							<span>
								<BsArrowCounterclockwise title='Undo task' />
							</span>
						</div>
					)}

					{!todo.checked && hoverTasks && (
						<div className='todoItem__container--delete todoItem__container--actions'>
							<span>
								<BsTrash title='Delete task' />
							</span>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ToDoItem;
