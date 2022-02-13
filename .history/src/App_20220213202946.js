import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
function App() {
	return (
		<>
			<TopBar />
			<div className='container'>
				<SideBar />
			</div>
		</>
	);
}

export default App;
