import { RiAddLine } from 'react-icons/ri';
import './main.scss';
const Main = () => {
	return (
		<div className='main'>
			<div className='main__editor'>
				<header className='editor__header'>
					<div className='editor__header--content'>
						<h2>Task</h2>
						<button>
							<RiAddLine />
							Add Task
						</button>
					</div>
				</header>
			</div>
		</div>
	);
};

export default Main;
