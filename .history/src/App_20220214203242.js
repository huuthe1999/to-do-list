import React, { useState } from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
function App() {
	return (
		<div>
			<div className='app'>
				<TopBar />
				<div className='container'>
					<SideBar />
					<Main />
				</div>
			</div>
		</div>
	);
}

export default App;
