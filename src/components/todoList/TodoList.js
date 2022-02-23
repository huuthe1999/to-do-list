import { RiAddLine } from 'react-icons/ri';
import { useSelector } from 'react-redux';
import { selectProject } from '../../features/project/projectSlice';
import Next7Day from '../next7Day/Next7Day';
import ToDoItem from './todoItem/ToDoItem';
import './todoList.scss';
const todoList = [
	{
		id: 'd54sd4',
		name: 'Go for a run',
		time: '10:00 AM',
		date: '06/03/2021',
		day: '6',
		checked: false,
		color: '#00ff00',
		project: 'personal',
	},
	{
		id: 'd54fdf',
		name: 'Meeting',
		time: '09:00 AM',
		date: '08/03/2021',
		day: '1',
		checked: true,
		color: '#00ff00',
		project: 'relax',
	},
	{
		id: 'd54sfe',
		name: 'Go for a run',
		time: '10:00 AM',
		date: '06/03/2021',
		day: '6',
		checked: true,
		color: '#00ff00',
		project: 'personal',
	},
	{
		id: 'd5fwdf',
		name: 'Meeting',
		time: '09:00 AM',
		date: '08/03/2021',
		day: '1',
		checked: true,
		color: '#00ff00',
		project: 'relax',
	},
	{
		id: 'd5gdsd4',
		name: 'Go for a run',
		time: '10:00 AM',
		date: '06/03/2021',
		day: '6',
		checked: false,
		color: '#00ff00',
		project: 'personal',
	},
	{
		id: 'd34fdf',
		name: 'Meeting',
		time: '09:00 AM',
		date: '08/03/2021',
		day: '1',
		checked: true,
		color: '#00ff00',
		project: 'relax',
	},
	{
		id: 'd2fdf',
		name: 'Meeting',
		time: '09:00 AM',
		date: '08/03/2021',
		day: '1',
		checked: true,
		color: '#00ff00',
		project: 'relax',
	},
	{
		id: 'g44fdf',
		name: 'Meeting',
		time: '09:00 AM',
		date: '08/03/2021',
		day: '1',
		checked: true,
		color: '#00ff00',
		project: 'relax',
	},
	{
		id: 'g45hdf',
		name: 'Meeting',
		time: '09:00 AM',
		date: '08/03/2021',
		day: '1',
		checked: false,
		color: '#00ff00',
		project: 'relax',
	},
];
const TodoList = () => {
	// const nameTodo = 'Next 7 days';
	const project = useSelector(selectProject);

	return (
		<div className='todoList'>
			<div className='todoList__title'>
				<h2>{project}</h2>
				<button className='todoList__title--button'>
					<RiAddLine />
					<p>Add task</p>
				</button>
			</div>
			<div className='todoList__container'>
				{project === 'Next 7 days' ? (
					<Next7Day todoList={todoList} />
				) : (
					todoList.map(todo => <ToDoItem key={todo.id} todo={todo} />)
				)}
			</div>
		</div>
	);
};

export default TodoList;
