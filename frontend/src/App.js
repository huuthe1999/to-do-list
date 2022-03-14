import React from 'react';
import './App.scss';
import Main from './components/main/Main';
import SideBar from './components/sideBar/SideBar';

function App() {
	return (
		<div className='app'>
			<div className='container'>
				<SideBar />
				<Main />
			</div>
		</div>
	);
}

export default App;
