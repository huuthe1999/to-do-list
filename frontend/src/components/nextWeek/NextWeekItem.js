import moment from 'moment';
import { useState } from 'react';
import { BsCaretUp } from 'react-icons/bs';
import ToDoItem from '../todoList/todoItem/ToDoItem';
const NextWeekItem = ({ todo }) => {
	const checkToday = todo.day === parseInt(moment().format('d'));
	const [active, setActive] = useState(checkToday ? true : false);

	return (
		<div
			style={{
				pointerEvents: todo.todoByDay.length > 0 ? 'auto' : 'none',
			}}
			onClick={() => setActive(!active)}
			className={`nextWeek__container ${active ? 'active' : ''}`}>
			<div className='nextWeek__day'>
				<div className='nextWeek__day--title'>
					<h4>
						{moment(todo.day, 'd').format('dddd')}
						{checkToday && ' (Today)'}
					</h4>
					<span className='nextWeek__day--size'>{`${
						todo.todoByDay.length > 0
							? todo.todoByDay.length > 9
								? `( ${(
										<small>
											9<sup>+</sup>
										</small>
								  )} )`
								: `(${todo.todoByDay.length})`
							: ''
					}`}</span>
				</div>
				<div className='nextWeek__day--icon'>
					<BsCaretUp />
				</div>
			</div>
			<div className='nextWeek__todos'>
				{todo.todoByDay.map(todo => (
					<ToDoItem key={todo._id} todo={todo} />
				))}
			</div>
		</div>
	);
};

export default NextWeekItem;
