import React, { useState } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import Main from './components/main/Main';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
function App() {
	const [toggle, setToggle] = useState(false);
	const handleSetToggle = () => {
		setToggle(!toggle);
	};
	return (
		<div className='app'>
			<TopBar handleSetToggle={handleSetToggle} />
			<div className='container'>
				<SideBar toggle={toggle} />
				<Main />
			</div>
		</div>
	);
}

export default App;
