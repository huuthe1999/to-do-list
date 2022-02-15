import React from 'react';
// import { Counter } from './features/counter/Counter';
import './App.scss';
import Main from './components/main/Main';
import SideBar from './components/sideBar/SideBar';
import TopBar from './components/topBar/TopBar';
function App() {
	return (
		<div className='app'>
			{/* <TopBar /> */}
			<div className='container'>
				<SideBar />
				<Main />
			</div>
		</div>
	);
}

export default App;
