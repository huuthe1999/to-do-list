import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
function App() {
	const [modal, setShowModal] = useState(false);
	return (
		<>
			<div className='app'>
				<TopBar />
				<div className='container'>
					<SideBar />
					<Main />
				</div>
			</div>
			<Modal showModal={modal} setShowModal />
		</>
	);
}

export default App;
