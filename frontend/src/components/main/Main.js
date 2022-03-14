import { motion } from 'framer-motion';
import AddTodoForm from '../form/todoForm/AddTodoForm';
import TodoList from '../todoList/TodoList';
import './main.scss';
const animation = {
	hidden: { x: '100%', y: 0, opacity: 0 },
	show: {
		x: 0,
		y: 0,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 300,
			damping: 15,
			duration: 0.2,
		},
	},
};

const Main = () => {
	return (
		<div className='main'>
			<TodoList />
			<motion.div
				style={{
					position: 'fixed',
					top: '0',
					right: '0',
					width: '80px',
					height: '80px',
					backgroundColor: '#0091ea',
					clipPath: 'circle(80px at 100% 0)',
					cursor: 'pointer',
				}}
				initial='hidden'
				animate='show'
				variants={animation}
				whileTap={{
					scale: 0.9,
				}}
				whileHover={{
					scale: 1.05,
					filter: 'brightness(1.2)',
				}}>
				<AddTodoForm />
			</motion.div>
		</div>
	);
};

export default Main;
